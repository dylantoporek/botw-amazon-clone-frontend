import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import bowReducer from '../app/Redux-Slices/bowSlice';
import weaponReducer from '../app/Redux-Slices/weaponSlice'

export const store = configureStore({
  reducer: {
    bow: bowReducer,
    weapon: weaponReducer,
  },
});
