import md5 from 'js-md5'

const PUBLIC_KEY = '3602c803495ec3d9a7d4422246aad37f'
const PRIVATE_KEY = '9fb5758b56efdb5da62f10450983f9b2d10038f9'
const times = Number(new Date())
const hashs = md5.create()
hashs.update(times + PRIVATE_KEY + PUBLIC_KEY)

export const makeApiUrl = (path): string => {
  return `${process.env.API_URL}${path}&ts=${times}&apikey=3602c803495ec3d9a7d4422246aad37f&hash=${hashs}&limit=50`
}