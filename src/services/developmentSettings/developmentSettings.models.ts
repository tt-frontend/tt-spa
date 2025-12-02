import { createEvent, createStore } from 'effector';
import { featureToggles } from 'constants/featureToggles';
import {
  ICredItem,
  FeatureToggles,
  FeatureTogglesSet,
} from './developmentSettings.types';
import { persist } from 'effector-storage/local';
import { currentUserService } from 'services/currentUser/currentUserService';

const $isDevSettingsModalOpen = createStore(false);

const openDevSettingsModal = createEvent();
const closeDevSettingsModal = createEvent();

const setFeatureToggles = createEvent<FeatureTogglesSet | null>();
const toggleFeature = createEvent<string>();
const resetFeatureToggles = createEvent();

// by email
const removeCred = createEvent<string>();

const resetCreds = createEvent();

const $featureToggles = createStore<FeatureToggles>(featureToggles)
  .on(toggleFeature, (prev, feature) => ({
    ...prev,
    [feature]: !prev[feature as keyof FeatureToggles],
  }))
  .on(resetFeatureToggles, () => ({ ...featureToggles }))
  .on(setFeatureToggles, (prev, featureToggles) =>
    featureToggles
      ? {
          ...prev,
          ...featureToggles,
        }
      : prev,
  );

const setCredsList = createEvent<ICredItem[]>();

const $credsList = createStore<ICredItem[]>([])
  .reset(resetCreds)
  .on(currentUserService.outputs.$currentUser.updates, (prev, user) => {
    if (!user) return prev;

    return prev.map((item) => {
      if (item.email !== user.email) return item;

      return { ...item, user };
    });
  })
  .on(removeCred, (prev, email) => prev.filter((elem) => elem.email !== email))
  .on(setCredsList, (_, data) => data);

persist({
  store: $credsList,
  key: 'credsList',
});

persist<FeatureToggles>({
  store: $featureToggles,
  key: 'featureToggles',
  deserialize: (value) => {
    const originalKeys = Object.keys(featureToggles);

    const data = JSON.parse(value);

    const toggles = Object.entries(data).filter(([key]) =>
      originalKeys.includes(key),
    );

    const togglesKeys = toggles.map(([key]) => key);

    const newToggles = originalKeys
      .filter((key) => !togglesKeys.includes(key))
      .map((key) => [key, featureToggles[key as keyof FeatureToggles]]);

    return [...toggles, ...newToggles].reduce(
      (acc, [key, value]) => ({ ...acc, [key as keyof FeatureToggles]: value }),
      {},
    );
  },
  serialize: (data) => {
    const originalKeys = Object.keys(featureToggles);

    const toggles = Object.entries(data).filter(([key]) =>
      originalKeys.includes(key),
    );

    const features = toggles.reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      {},
    );

    const dataString = JSON.stringify(features);

    return dataString;
  },
});

$isDevSettingsModalOpen
  .on(openDevSettingsModal, () => true)
  .reset(closeDevSettingsModal);

export const developmentSettingsService = {
  inputs: {
    openDevSettingsModal,
    closeDevSettingsModal,
    toggleFeature,
    resetFeatureToggles,
    setFeatureToggles,
    resetCreds,
    removeCred,
    setCredsList,
  },
  outputs: {
    $isDevSettingsModalOpen,
    $featureToggles,
    $credsList,
  },
};
