import axios from 'axios'

const baseUrl = 'https://www.atg.se/services/racinginfo/v1/api/products/'

const getGameInfo = async gameType => {
  const searchUrl = baseUrl + gameType

  console.log(`searchUrl: ${searchUrl}`)
  const response = await axios.get(searchUrl)

  return response.data
}

export default { getGameInfo }
