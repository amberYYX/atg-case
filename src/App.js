import React, { useEffect, useState } from 'react'
import SearchFrom from './components/SearchForm'
import gameScheduleServices from './services/gameSchedule'
import getOneRaceServices from './services/raceInfo'
import Race from './components/Race'

import Table from './components/Table'

function App() {
  // const [gameInfo, setGameInfo] = useState([])

  const [searchResult, setSearchResult] = useState([])

  const [closetRace, setClosetRace] = useState(null)

  // const Object2Array = object => {
  //   console.log('object2array')
  //   let newArray = []
  //   for (let i in object) {
  //     newArray.push(object[i])
  //   }
  //   return newArray
  // }

  //get main page game info
  // useEffect(() => {
  //   console.log('useeffect to load game info')
  //   gameScheduleServices.getGameInfo('V75').then(response => {
  //     console.log('get initial info')
  //     setGameInfo(response)
  //   })
  // }, [])

  const changeFormat = stringDate => {
    const date = new Date(stringDate)
    return date.getTime()
  }

  const searchGameInfo = async gameType => {
    const searchResults = await gameScheduleServices.getGameInfo(gameType)

    const upcomingLength = Object.keys(searchResults.upcoming).length

    console.log(`upcomingLength${upcomingLength}`)
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

  // const targetRace = async() => {
  //   const result = await getOneRaceServices.getOneRaceInfo()
  // }

  //get One Race info
  // useEffect(() => {
  //   console.log('useeffect to load one Race info')
  //   gameScheduleServices.getGameInfo('V75').then(response => {
  //     console.log('get initial info')
  //     setGameInfo(response)
  //   })
  // }, [])

  useEffect(() => {
    console.log('useeffect to load one Race info')
    const id = searchResult.id
    getOneRaceServices.getOneRaceInfo(id).then(response => {
      setClosetRace(response)
      console.log(response)
    })
  }, [searchResult])

  const findClosetRace = gameArray => {
    gameArray.map(race => (race.startTime = changeFormat(race.startTime)))
    const closetRace = gameArray.sort((a, b) => a.startTime - b.startTime)[0]

    return closetRace
  }

  const columnsTitle = [
    {
      name: 'number',
      selector: 'number',
      sortable: true
    },
    {
      name: 'horse name',
      selector: 'status',
      sortable: true
    },
    {
      name: 'driver',
      selector: 'year',
      sortable: true
    }
  ]

  return (
    <div>
      <SearchFrom handleSearchGameInfo={searchGameInfo}></SearchFrom>
      {/* <div>{gameInfo.betType}</div> */}
      <p>=============</p>
      {searchResult ? <div>{searchResult.id}</div> : null}

      {/* {closetRace ? (
        <div>
          <h2>closetRace Info</h2>
          <ul>
            {closetRace.races.map(race => (
              <Race key={race.id} raceInfo={race}></Race>
            ))}
          </ul>
        </div>
      ) : null} */}

      {closetRace ? (
        <div>
          <p> hello</p>
          <ul>
            {closetRace.races.map(race => {
              return <Table key={race.id} data={race}></Table>
            })}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default App
