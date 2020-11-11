import React, { useEffect, useState } from 'react'
import SearchFrom from './components/SearchForm'
import gameScheduleServices from './services/gameSchedule'
import getOneRaceServices from './services/raceInfo'
import Race from './components/Race'
import Alert from './components/Alert'

function App() {
  const [game, setGame] = useState(null)
  const [searchResult, setSearchResult] = useState([])
  const [closetRace, setClosetRace] = useState(null)
  const [error, setErrorMessage] = useState(null)

  const changeFormat = stringDate => {
    const date = new Date(stringDate)
    return date.getTime()
  }

  const gameTypeCheck = userInput => {
    if (
      userInput === 'V75' ||
      userInput === 'V65' ||
      userInput === 'V64' ||
      userInput === 'V4'
    ) {
      setGame(userInput)
      return true
    } else {
      const inputErrorMessage = {
        title: 'Invalid input.',
        content:
          'The search services are only available for game type V75, V65, V64 and V4.'
      }

      setErrorMessage(inputErrorMessage)
      setTimeout(() => {
        setErrorMessage(null)
      }, 4000)

      return false
    }
  }

  const searchGameInfo = async gameType => {
    if (gameTypeCheck(gameType)) {
      const searchResults = await gameScheduleServices.getGameInfo(gameType)
      const upcomingLength = Object.keys(searchResults.upcoming).length

      if (upcomingLength === 0) {
        console.log('no recent upcoming')

        const result = findClosetRace(searchResults.results)
        setSearchResult(result)
      } else {
        console.log('recent upcoming...')
        const result = findClosetRace(searchResults.upcoming)
        setSearchResult(result)
      }
    }
  }

  //to load one Race info'
  useEffect(() => {
    const id = searchResult.id
    if (searchResult.length === 0) {
      return null
    } else {
      getOneRaceServices.getOneRaceInfo(id).then(response => {
        setClosetRace(response)
      })
    }
  }, [searchResult])

  const findClosetRace = gameArray => {
    gameArray.map(race => (race.startTime = changeFormat(race.startTime)))
    const closetRace = gameArray.sort((a, b) => a.startTime - b.startTime)[0]
    return closetRace
  }

  /*
  BG Ccolor
  darkBlue: rgba(19,51,76,1)
  */

  return (
    <div className="container mx-auto mt-10">
      <SearchFrom handleSearchGameInfo={searchGameInfo}></SearchFrom>

      <Alert message={error}></Alert>

      {closetRace ? (
        <div>
          <ul>
            {closetRace.races.map(race => (
              <Race key={race.id} raceInfo={race} id={game}></Race>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default App
