import { StatusCodes, getReasonPhrase } from 'http-status-codes'

export default function (message: string,
  status: StatusCodes = StatusCodes.OK): object {
  const name = getReasonPhrase(status)
  return { status, message, name, success: true }
}
