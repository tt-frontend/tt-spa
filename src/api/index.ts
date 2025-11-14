import { baseURL } from 'constants/apiUrl';
import { createEvent, createStore } from 'effector';
import { persist } from 'effector-storage/local';

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
