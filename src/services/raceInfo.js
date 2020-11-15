import axios from 'axios'
const baseUrl = 'https://www.atg.se/services/racinginfo/v1/api/games/'

const getOneRaceInfo = async gameId => {
  const searchUrl = baseUrl + gameId
  const response = await axios.get(searchUrl)
  return response.data
}

export default { getOneRaceInfo }
