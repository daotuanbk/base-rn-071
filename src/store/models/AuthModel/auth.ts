import { createModel } from '@rematch/core';
import { ILoginParams, RootModel } from '@app/store';
import authServices from '@app/services/authServices';
import storage from '@react-native-async-storage/async-storage';
import { t } from 'i18next';
export const authModel = createModel<RootModel>()({
  state: {
    isSignedIn: false,
  },
  reducers: {
    setIsSignedIn: (state, payload: boolean) => {
      return {
        isSignedIn: payload,
      };
    },
  },
  effects: dispatch => ({
    async login(payload: ILoginParams, _state) {
      try {
        const result = await authServices.login(payload);
        if (result) {
          await storage.setItem('userToken', result?.accessToken);
          dispatch.authModel.setIsSignedIn(true);
        } else {
          dispatch.appModel.showNotificationModal({
            notificationModalContent: t('errors:loginFailedDescription'),
            notificationModalTitle: t('drawer:loginFailedTitle'),
            notificationModalType: 'error',
          });
        }
      } catch (err) {
        dispatch.appModel.showNotificationModal({
          notificationModalContent: t('errors:loginFailedDescription'),
          notificationModalTitle: t('drawer:loginFailedTitle'),
          notificationModalType: 'error',
        });
      }
    },
  }),
});
