import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const officesApi = createApi({
    reducerPath: 'offices/api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/'
    } as any),
    endpoints: (builder) => ({
        getRentOffices: builder.query<any[], void>({
            query: () => ({
                url: `get-rent-offices`,
            }),
            // transformResponse: (response: any) => (response.items)
        }),
        // getUserRepos: builder.query<any[], string>({
        //     query: (username: string) => ({
        //         url: `users/${username}/repos`
        //     })
        // })
    })
});

export const {useGetRentOfficesQuery} = officesApi;