import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export class BadRequest extends Error {
  status: StatusCodes
  name: ReasonPhrases

  constructor (message: string) {
    super(message)

    this.status = StatusCodes.BAD_REQUEST
    this.name = ReasonPhrases.BAD_REQUEST
  }
}
