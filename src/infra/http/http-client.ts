import { HttpRequest, HttpResponse, HttpClient } from '@/data/protocols/http'

export class FetchHttpAdapter implements HttpClient {
  async request (data: HttpRequest): Promise<HttpResponse> {
    let response
    let responseJson
    try {
      response = await fetch(data.url,{
        method: data.method,
        headers: data.headers
      })
      responseJson = await response.json()
    } catch (error) {
      responseJson = error.response
    }
    return {
      statusCode: response.status,
      body: responseJson.data.results
    }
  }
}