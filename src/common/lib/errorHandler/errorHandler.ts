import { isAxiosError } from 'axios'

export const errorHandler = (error: unknown) => {
  if (isAxiosError(error) || error instanceof Error) {
    return error.message
  } else {
    return 'Something went wrong'
  }
}
