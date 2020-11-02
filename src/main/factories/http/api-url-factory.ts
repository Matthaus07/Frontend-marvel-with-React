import md5 from 'js-md5'

const PUBLIC_KEY = '1d72a4d42c186726c707c4900f62845c'
const PRIVATE_KEY = 'e2e32d0cf364ee496ef001282c4f1cdf846f4f2f'
const times = Number(new Date())
const hashs = md5.create()
hashs.update(`${times}${PRIVATE_KEY}${PUBLIC_KEY}`)

export const makeApiUrl = (path): string => {
  return `${process.env.API_URL}${path}&ts=${times}&apikey=${PUBLIC_KEY}&hash=${hashs}&limit=50`
}
