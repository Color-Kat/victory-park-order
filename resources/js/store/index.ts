import {configureStore} from "@reduxjs/toolkit";

import {modalReducer} from "@/store/modal/modal.slice";
import {officesApi} from "@/store/offices/offices.api.ts";

export const store = configureStore({
   reducer: {
       [officesApi.reducerPath]: officesApi.reducer,
       // test: testSlice.reducer,
       modalCallRequest: modalReducer,
   },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(officesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch