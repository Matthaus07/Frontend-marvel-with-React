import md5 from 'js-md5'

const PUBLIC_KEY = '83d65c3fe4e9bd364cd51734e06563d8'
const PRIVATE_KEY = 'b7bb154d010479af8fd6279b371adb73472d4a83'
const times = Number(new Date())
const hashs = md5.create()
hashs.update(`${times}${PRIVATE_KEY}${PUBLIC_KEY}`)

export const makeApiUrl = (path): string => {
  return `${process.env.API_URL}${path}&ts=${times}&apikey=${PUBLIC_KEY}&hash=${hashs}&limit=50`
}
