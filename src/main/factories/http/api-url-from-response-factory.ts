import md5 from 'js-md5'

const PUBLIC_KEY = '83d65c3fe4e9bd364cd51734e06563d8'
const PRIVATE_KEY = 'b7bb154d010479af8fd6279b371adb73472d4a83'
const timestamp = Number(new Date())
const hash = md5.create()
hash.update(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`)

export const getApiUrlFromTheResponse = (queryString): string => {
  return `${queryString}&ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`
}
