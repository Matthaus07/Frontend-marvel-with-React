import md5 from 'js-md5'

const PUBLIC_KEY = '3602c803495ec3d9a7d4422246aad37f'
const PRIVATE_KEY = '9fb5758b56efdb5da62f10450983f9b2d10038f9'
const timestamp = Number(new Date())
const hash = md5.create()
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

export const getApiUrlFromTheResponse = (apiUrl): string => {
  return `${apiUrl}&ts=${timestamp}&apikey=3602c803495ec3d9a7d4422246aad37f&hash=${hash}`
}