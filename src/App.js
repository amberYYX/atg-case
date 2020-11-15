import React, { useEffect, useState } from 'react'
import SearchFrom from './components/SearchForm'
import gameScheduleServices from './services/gameSchedule'
import getOneRaceServices from './services/raceInfo'
import Race from './components/Race'
import Alert from './components/Alert'

function App() {
  const [game, setGame] = useState(null)
  const [upComing, setGameStatus] = useState(true)
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
      const getKeys = Object.keys(searchResults)
      console.log(getKeys)
      if (getKeys.includes('upcoming')) {
        const result = findClosetRace(searchResults.upcoming)
        setSearchResult(result)
        setGameStatus(true)
      } else {
        const result = findClosetRace(searchResults.results)
        setSearchResult(result)
        setGameStatus(false)
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
    <div className="container mx-auto mt-10 w-3/4">
      <SearchFrom handleSearchGameInfo={searchGameInfo}></SearchFrom>

      <Alert message={error}></Alert>

      {closetRace ? (
        <div>
          {
            upComing ? null : (
              <div className="bg-blue-400 text-white border-t-8 border-blue-500 text-lg px-8 py-3 mt-4 font-bold rounded-b">
                {`Sorry, No upcoming games found under ${game}`}
                <p className="text-blue-800 text-base font-normal">
                  Below shows the most recent game results for you.
                </p>
              </div>
            )
            // (
            //   <Alert
            //     message={{
            //       title: `Sorry, No upcoming games found under ${game}`,
            //       content: 'Below showing the most recent game results for you.'
            //     }}
            //   ></Alert>
            // )
          }
          <ul>
            {closetRace.races.map(race => (
              <Race
                key={race.id}
                raceInfo={race}
                id={game}
                searchType={searchResult.searchResultType}
              ></Race>
            ))}
          </ul>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  )
}

export default App
