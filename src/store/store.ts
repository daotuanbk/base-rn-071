import persistPlugin, { getPersistor } from '@rematch/persist';
import { init, Models, RematchDispatch, RematchRootState } from '@rematch/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { testModel, settingModel, authModel, appModel } from './models';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['testModel', 'settingModel', 'authModel'],
};
export interface RootModel extends Models<RootModel> {
  testModel: typeof testModel;
  settingModel: typeof settingModel;
  authModel: typeof authModel;
  appModel: typeof appModel;
}
const models = { testModel, settingModel, authModel, appModel };

export const store = init<RootModel>({
  plugins: [persistPlugin(persistConfig)],
  models,
});
export const { getState, dispatch } = store;
export const persistor = getPersistor();
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
