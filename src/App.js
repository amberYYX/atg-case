import React, { useEffect, useState } from 'react'
import SearchFrom from './components/SearchForm'
import gameScheduleServices from './services/gameSchedule'
import getOneRaceServices from './services/raceInfo'
import Race from './components/Race'
import Alert from './components/Alert'
import GameSchedule from './components/GameSchedule'

function App() {
  const [gameType, setGameType] = useState('')
  const [gameId, setGameId] = useState(0)
  const [upComing, setGameStatus] = useState(true)
  const [searchResult, setSearchResult] = useState([])
  const [gameIdInfo, setGameIdInfo] = useState(null)
  const [error, setErrorMessage] = useState(null)

  const gameTypeCheck = userInput => {
    if (
      userInput === 'V75' ||
      userInput === 'V65' ||
      userInput === 'V64' ||
      userInput === 'V4'
    ) {
      setGameType(userInput)
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
      if (getKeys.includes('upcoming')) {
        const result = searchResults.upcoming
        setSearchResult(result)
        setGameStatus(true)
      } else {
        const result = searchResults.results
        setSearchResult(result)
        setGameStatus(false)
      }
    }
  }

  const handleGameSearch = item => {
    setGameId(item.id)
  }

  //to load one Race info'
  useEffect(() => {
    if (gameId === 0) {
      return null
    } else {
      getOneRaceServices.getOneRaceInfo(gameId).then(response => {
        setGameIdInfo(response)
      })
    }
  }, [gameId])

  return (
    <div
      style={{ minWidth: '700px' }}
      className="container mx-auto mt-10 w-3/4"
    >
      <SearchFrom handleSearchGameInfo={searchGameInfo}></SearchFrom>

      <Alert message={error}></Alert>

      {searchResult.length > 0 ? (
        <div>
          {upComing ? null : (
            <div className="w-3/4 m-auto bg-blue-400 text-white border-t-8 border-blue-500 text-lg px-8 py-2 mt-4 font-bold rounded-b">
              {`Sorry, No upcoming games found under game type ${gameType}.`}
              <p className="text-blue-800 text-base font-normal">
                Below shows the most recent game results for you.
              </p>
            </div>
          )}
          <GameSchedule
            data={searchResult}
            handleSelectedId={handleGameSearch}
          ></GameSchedule>
        </div>
      ) : null}

      {gameIdInfo ? (
        <ul>
          {gameIdInfo.races.map(race => (
            <Race
              key={race.id}
              raceInfo={race}
              id={gameType}
              searchType={searchResult.searchResultType}
            ></Race>
          ))}
        </ul>
      ) : (
        <div> </div>
      )}
    </div>
  )
}

export default App
