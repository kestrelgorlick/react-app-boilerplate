import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '.';

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  devTools: false,
});

// Remove in production (state logging)
store.subscribe(() => console.log(store.getState()))



export default store;
