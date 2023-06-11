import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface IOffice {
    id: number
    areaMin: number
    areaMax: number
    isActive: number
    crmId: number
    type: string
    floor: number
    price: number
    priceCur: string
    typeDeal: string
    tax: string
    isReady: string
    readyDate: string
    explCur: string
    explPrice: number
    layout: string
    created_at: string
    updated_at: string
}

export const officesApi = createApi({
    reducerPath: 'offices/api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/'
    } as any),
    endpoints: (builder) => ({
        getRentOffices: builder.query<IOffice[], void>({
            query: () => ({
                url: `get-rent-offices`,
            }),
            // transformResponse: (response: any) => (response.items)
        }),
        getSellOffices: builder.query<IOffice[], void>({
            query: () => ({
                url: `get-sell-offices`,
            }),
            // transformResponse: (response: any) => (response.items)
        }),
        requestCall: builder.mutation<any, {
            name: string,
            phone: string;
        }>({
            query: (payload) => ({
                url: `request-call`,
                method: 'POST',
                body: payload
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

export const {useGetRentOfficesQuery, useGetSellOfficesQuery, useRequestCallMutation} = officesApi;