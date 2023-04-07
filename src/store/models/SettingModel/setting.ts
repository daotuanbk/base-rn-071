import produce from 'immer';

export interface SettingState {
  currentLang: string;
  isFirstLaunch: boolean;
}

export interface SettingModel {
  state: SettingState;
  reducers: {
    setLanguage: (state: SettingState, payload: string) => void;
    setIsFirstLaunch: (state: SettingState, payload: boolean) => void;
  };
}

export const settingModel: SettingModel = {
  state: {
    currentLang: 'en',
    isFirstLaunch: true,
  },
  reducers: {
    setLanguage: produce((state: SettingState, payload: string) => {
      state.currentLang = payload;
    }),
    setIsFirstLaunch: produce((state: SettingState, payload: boolean) => {
      state.isFirstLaunch = payload;
    }),
  },
};
