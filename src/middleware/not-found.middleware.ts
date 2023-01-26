import { Request, Response } from 'express'
import { NotFound } from '../errors/not-found.error'

export default function (request: Request, response: Response): void {
  throw new NotFound('The is no such a page')
}
