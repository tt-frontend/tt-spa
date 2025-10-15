import { createEffect, createEvent } from 'effector';
import { sample } from 'effector';
import { LoginRequest, TokenResponse } from 'api/types';
import { EffectFailDataAxiosError } from 'types';
import { loginPost } from './loginService.api';
import { message } from 'antd';
import { developmentSettingsService } from 'services/developmentSettings/developmentSettings.models';

const handlePostLogin = createEvent<LoginRequest>();

export const postLoginFx = createEffect<
  LoginRequest,
  TokenResponse,
  EffectFailDataAxiosError
>(loginPost);

const $isLoading = postLoginFx.pending;

const successLogin = postLoginFx.doneData;

postLoginFx.failData.watch((error) => {
  return message.error(
    error.response.data.error.Text ||
      error.response.data.error.Message ||
      'Произошла ошибка',
  );
});

sample({ clock: handlePostLogin, target: postLoginFx });

developmentSettingsService.outputs.$credsList.on(
  postLoginFx.done,
  (prev, { params }) => {
    const isExist = prev.some((elem) => elem.email === params.email);

    if (isExist) {
      return prev;
    }

    return [...prev, { email: params.email, password: params.password }];
  },
);

sample({
  clock: postLoginFx.done,
  target: developmentSettingsService.inputs.closeDevSettingsModal,
});

export const loginService = {
  inputs: {
    handlePostLogin,
    successLogin,
    openDevSettingsModal:
      developmentSettingsService.inputs.openDevSettingsModal,
  },
  outputs: { $isLoading },
};
