import React, { useState } from 'react'

const SearchFrom = ({ handleSearchGameInfo }) => {
  const [gameType, setGameType] = useState('')

  const handleGameTypeChange = e => {
    e.preventDefault()
    setGameType(e.target.value)
  }

  const searchGameInfo = e => {
    e.preventDefault()
    // console.log(`${gameType} in searchForm`)
    handleSearchGameInfo(gameType)
  }

  return (
    <>
      <form className="w-full max-w-sm" onSubmit={searchGameInfo}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="GameType"
            value={gameType}
            onChange={handleGameTypeChange}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            search
          </button>
        </div>
      </form>
    </>
  )
}

export default SearchFrom
