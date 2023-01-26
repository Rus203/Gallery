import { NextFunction, Request, Response } from 'express'
import { getReasonPhrase, StatusCodes } from 'http-status-codes'

import { IError } from '../interfaces/error.interface'

export default function (error: IError,
  request: Request, response: Response, next: NextFunction): void {
  const answer = {
    status: error.status ?? StatusCodes.INTERNAL_SERVER_ERROR,
    name: () => getReasonPhrase(this.status),
    message: error.message
  }

  response.status(answer.status).send(answer)
}
