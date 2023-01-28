import { StatusCodes } from 'http-status-codes'

export interface IError {
  name: string
  message?: string
  status?: StatusCodes,
  success?: string
}
