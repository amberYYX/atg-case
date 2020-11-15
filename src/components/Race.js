import React from 'react'
import Table from './Table'
import RaceHead from './RaceHead'

const Race = ({ raceInfo, id }) => {
  console.log(raceInfo)
  return (
    <li className="bg-blue-400 mt-10 text-gray-100" key={raceInfo.name}>
      <RaceHead info={raceInfo} id={id}></RaceHead>
      <Table data={raceInfo}></Table>
    </li>
  )
}

export default Race
