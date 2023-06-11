import {configureStore} from "@reduxjs/toolkit";

import {modalsReducer} from "@/store/modals/modals.slice";
import {officesApi} from "@/store/offices/offices.api.ts";

export const store = configureStore({
   reducer: {
       [officesApi.reducerPath]: officesApi.reducer,
       // test: testSlice.reducer,
       modals: modalsReducer,
   },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(officesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch