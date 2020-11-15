import React from 'react'
import Table from './Table'
import RaceHead from './RaceHead'
import LazyLoad from 'react-lazyload'

const Race = ({ raceInfo, id, searchType }) => {
  return (
    <LazyLoad once>
      <li className="bg-blue-400 mt-10 text-gray-100" key={raceInfo.name}>
        <RaceHead info={raceInfo} id={id} searchType={searchType}></RaceHead>
        <Table data={raceInfo}></Table>
      </li>
    </LazyLoad>
  )
}

export default Race
