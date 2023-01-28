import { Request, Response, NextFunction, Router } from 'express'

export const trackStatus = (middleware: Function): any => {
  return async (request: Request,
    response: Response, next: NextFunction): Promise<void> => {
    try {
      await middleware(request, response, next)
    } catch (error) {
      next(error)
    }
  }
}

export default trackStatus
