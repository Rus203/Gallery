import * as jwt from 'jsonwebtoken'

export const generateTokens = (data: object): object => {
  const accessSecret: string = process.env.SECRET_KEY_FOR_ACCESS ?? 'F-JaNdRg'
  const refreshSecret: string = process.env.SECRET_KEY_FOR_REFRESH ?? '2s5v8y/B'

  const accessToken = jwt.sign({
    data: 'foobar'
  }, accessSecret, { expiresIn: '1h' })

  const refreshToken = jwt.sign({
    data: 'foobar'
  }, refreshSecret, { expiresIn: '30d' })

  return { accessToken, refreshToken }
}
