import {
    Enums,
    Models,
} from '../models/models'

export const performNetworkCall = <T>(
    networkCallType: Enums.NetworkRequestType,
    converter: (response: any) => T,
    onSuccess: (responseConverted: T) => void,
    onFailure: (error: any) => void,
): void => {
    let requestUrl: string
    let method: string | undefined

    switch (networkCallType) {
        case 'Main':
            requestUrl = 'https://gorest.co.in/public-api/users/122/posts'
            method = 'GET'
            break
        case 'Secondary':
            requestUrl = 'TODO'
            method = 'POST'
            break
        default:
            requestUrl = ''
            break
    }

    fetch(requestUrl, {method: method})
        .then((response: Response): Promise<any> => response.json())
        .then((json: any): void => {
            console.log({
                requestType: networkCallType,
                requestUrl: requestUrl,
                method: method,
                requestResult: json,
            })
            if (json.code && json.code !== 200) {
                const techError: Models.IError = {
                    code: json.code,
                    message: 'Technical error',
                }

                onFailure(techError)
            }

            try {
                const response: T = converter(json)
                onSuccess(response)
            } catch (error: any) {
                const customError: Models.IError = {
                    message: error.message ? error.message : 'Unknown error',
                }

                if (error.code) {
                    customError.code = error.code
                }

                onFailure(customError)
            }
        })
        .catch((error: any) => {
            console.log({
                requestType: networkCallType,
                requestUrl: requestUrl,
                method: method,
                requestError: error,
            })
            const errorFormatted: Models.IError = {
                message: error.message ? error.message : 'Unknown error',
            }

            if (error.code) {
                errorFormatted.code = error.code
            }

            if (error.comment) {
                errorFormatted.comment = error.comment
            }

            onFailure(errorFormatted)
        })
}
