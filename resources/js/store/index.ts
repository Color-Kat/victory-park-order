import {configureStore} from "@reduxjs/toolkit";

import {modalReducer} from "@/store/modal/modal.slice";

export const store = configureStore({
   reducer: {
       // [testApi.reducerPath]: testApi.reducer,
       // test: testSlice.reducer,
       modalCallRequest: modalReducer,
   },
    // middleware: getDefaultMiddleware => getDefaultMiddleware.concat(api.middleware())
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch