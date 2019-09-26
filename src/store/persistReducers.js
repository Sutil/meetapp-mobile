import { persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage';
import storage from 'redux-persist/lib/storage';

export default reducers => {
  const persistedReducers = persistReducer(
    {
      key: 'meetappmob',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducers;
};
