import { createEvent, createStore } from 'effector';
import { persist } from 'effector-storage/local';

export const prodUrl = 'https://prod.k8s.transparent-technology.ru/api';
const devUrl = 'https://stage.k8s.transparent-technology.ru/api/';

export const baseURL = import.meta.env.VITE_API_URL || devUrl;

const apiURL = baseURL;

const setDevUrl = createEvent<string>();
const $devUrl = createStore(apiURL || '').on(setDevUrl, (_, devUrl) => devUrl);

persist({
  store: $devUrl,
  key: 'dev-api-url',
});

export const apiService = {
  outputs: {
    $devUrl,
  },
  inputs: {
    setDevUrl,
  },
};
