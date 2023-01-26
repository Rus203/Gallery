import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export class NotFound extends Error {
  status: StatusCodes
  name: ReasonPhrases

  constructor (message: string) {
    super(message)

    this.status = StatusCodes.NOT_FOUND
    this.name = ReasonPhrases.NOT_FOUND
  }
}
