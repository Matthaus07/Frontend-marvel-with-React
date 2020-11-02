import md5 from 'js-md5'

const PUBLIC_KEY = 'ec62e69ea22ec9e3c42bacf6df0fc296'
const PRIVATE_KEY = '4e1c785eeb8a9eef41579b882f0fc07a8c86a834'
const times = Number(new Date())
const hashs = md5.create()
hashs.update(`${times}${PRIVATE_KEY}${PUBLIC_KEY}`)

export const makeApiUrl = (path): string => {
  return `${process.env.API_URL}${path}&ts=${times}&apikey=${PUBLIC_KEY}&hash=${hashs}&limit=50`
}
