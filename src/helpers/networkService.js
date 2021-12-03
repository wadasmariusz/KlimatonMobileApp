import axios from 'axios'
import configuration from '../constants/configuration'

const handleStatuses = [500, 501, 502, 503]
export const unexpectedErrorMessage = 'Wystąpił nieoczekiwany błąd, spróbuj ponownie'
const error404 = 'Wystąpił błąd, nie znaleziono podanej strony'
const error403 = 'Nie masz dostępu do podanej strony'
const error401 = 'Dostęp tylko dla zalogowanego użytkownika, zaloguj sie aby zobaczyć stronę'

export const fetchFromAPI = async config => {
  return axios
    .request(config)
    .then(response => {
      return response.data ? response.data : response.status
    })
    .catch(error => {
      if (error.response) {
        // client received an error response (5xx, 4xx)
        const status = error.response.status
        if (status === 404) {
          throw new Error(error404)
        } else if (status === 403) {
          throw new Error(error403)
        } else if (status === 401) {
          throw new Error(error401)
        } else if (handleStatuses.indexOf(status) !== -1) {
          throw new Error(unexpectedErrorMessage)
        } else {
          throw new Error(getErrorMessage(error.response.data))
        }
        //throw new Error(unexpectedErrorMessage)
      } else if (error.request) {
        // client never received a response, or request never left
        throw new Error(unexpectedErrorMessage)
      } else {
        // anything else
        throw new Error(unexpectedErrorMessage)
      }
    })
}

const getErrorMessage = error => {
  if (error) {
    const errors = error?.errors ? error?.errors?.map(e => e.message)?.join('\n') : ''
    if (errors && errors?.length > 1) {
      return errors
    } else {
      return `${error?.message}`
    }
  } else {
    return unexpectedErrorMessage
  }
}

export const getAPIAddress = endpoint => {
  return `${configuration.API_URL}${endpoint}`
}