import React, { useState } from 'react'

const SearchFrom = ({ handleSearchGameInfo }) => {
  const [gameType, setGameType] = useState('')

  const handleGameTypeChange = e => {
    e.preventDefault()
    setGameType(e.target.value.toUpperCase())
  }

  const searchGameInfo = e => {
    e.preventDefault()
    // console.log(`${gameType} in searchForm`)
    handleSearchGameInfo(gameType)
  }

  return (
    <>
      <form className="w-full max-w-sm m-auto" onSubmit={searchGameInfo}>
        <div className="flex items-center border-b border-blue-500 py-1">
          <input
            className="appearance-none text-2xl bg-transparent border-none w-full text-blue-100 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Input game type here"
            value={gameType}
            onChange={handleGameTypeChange}
          />
          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 focus:outline-none text-xl border-4 text-white py-1 px-2 rounded"
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
