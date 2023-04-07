import produce from 'immer';
import { IShowNotificationModalPayload } from './interface';

export interface AppState {
  notificationModalVisible: boolean;
  notificationModalContent: string;
  notificationModalType: string;
  notificationModalTitle: string;
  notificationModalOkAction: string;
  notificationModalOkData: any;
}

export interface AppModel {
  state: AppState;
  reducers: {
    showNotificationModal: (
      state: AppState,
      payload: IShowNotificationModalPayload,
    ) => AppState;
    hideNotificationModal: (
      state: AppState,
      payload: IShowNotificationModalPayload,
    ) => AppState;
  };
}

export const appModel: AppModel = {
  state: {
    notificationModalVisible: false,
    notificationModalContent: '',
    notificationModalTitle: '',
    notificationModalType: '',
    notificationModalOkAction: '',
    notificationModalOkData: null,
  },
  reducers: {
    showNotificationModal: produce(
      (state: AppState, payload: IShowNotificationModalPayload) => {
        const {
          notificationModalContent,
          notificationModalTitle,
          notificationModalType,
          notificationModalOkAction,
          notificationModalOkData,
        } = payload;
        return {
          ...state,
          notificationModalVisible: true,
          notificationModalContent,
          notificationModalTitle,
          notificationModalType,
          notificationModalOkAction,
          notificationModalOkData,
        };
      },
    ),
    hideNotificationModal: produce((state: AppState, _payload) => {
      return {
        ...state,
        notificationModalVisible: false,
        notificationModalContent: '',
        notificationModalTitle: '',
        notificationModalType: '',
        notificationModalOkAction: '',
        notificationModalOkData: null,
      };
    }),
  },
};
