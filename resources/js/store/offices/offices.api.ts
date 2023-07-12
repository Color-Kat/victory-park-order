import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface IOffice {
    id: number
    type: 'rent' | 'sell';
    photos: string[];
    areaMin: number
    areaMax: number
    isActive: number
    crmId: number
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
        }),
        getOfficeByCrmId: builder.query<IOffice, { crmId: number, typeDeal: 'rent' | 'sell' }>({
            query: (data) => ({
                url: `get-office/${data.typeDeal}/${data.crmId}`,
            }),
        }),
        requestCall: builder.mutation<{success?: boolean, error?: string}, {
            name: string,
            phone: string,
            email?: string,
            message?: string,
            officeSpace?: number,
            officeCrmId?: number,
            typeDeal?: string,
            'g-recaptcha-response': string
        }>({
            query: (payload) => ({
                url: `request-call`,
                method: 'POST',
                body: payload
            }),
        }),

        requestWhatsApp: builder.mutation<any, {
            name: string,
            phone: string,
            officeSpace?: number,
            officeCrmId?: number,
            typeDeal?: string,
        }>({
            query: (payload) => ({
                url: `request-whatsapp`,
                method: 'POST',
                body: payload
            }),
        }),
        getGalleryPhotos: builder.query<string[], void>({
            query: () => ({
                url: `get-gallery-photos`,
            }),
            transformResponse: (response: { [key: number]: string }) => (Object.values(response).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))) as string[]
        }),
    })
});

export const {
    useGetRentOfficesQuery,
    useGetSellOfficesQuery,
    useGetOfficeByCrmIdQuery,
    useGetGalleryPhotosQuery,
    useRequestCallMutation,
    useRequestWhatsAppMutation
} = officesApi;