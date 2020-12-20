import {Models} from '../models/models'

export const convertResponse = (data: Models.IResponse): Models.IResponseConverted => {
    if (
        data.data &&
        Array.isArray(data.data) &&
        data.data.every((dataItem: Models.IResponseData): boolean => {
            return typeof dataItem.id === 'number'
        })
    ) {
        const response: Models.IResponseConverted = {
            responseData: data.data.reduce((result: string, dataItem: Models.IResponseData): string => {
                return result + dataItem.id.toString() + ' '
            }, 'Ids: ')
        }

        return response
    }

    throw Error('Error: incorrect reponse type')
}
