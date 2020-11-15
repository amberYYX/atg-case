import React from 'react'

const GameSchedule = ({ data, handleSelectedId }) => {
  const changeDateFormat = stringDate => {
    const date = new Date(stringDate)
    const time = stringDate.split('T')[1]
    const formatedDate = date.toDateString() + ', ' + time
    return formatedDate
  }

  const handleOnClick = item => {
    handleSelectedId(item)
  }

  return (
    <table className=" m-auto w-3/4 mt-8 bg-blue-600  text-white">
      <tbody>
        <tr className="text-center border-b border-blue-400 text-2xl">
          <td>Game Id</td>
          <td>Start Time</td>
        </tr>
        {data.map(item => (
          <tr
            key={item.id}
            className="text-center text-base border-b hover:bg-blue-800 leading-8 border-blue-500"
            onClick={() => handleOnClick(item)}
          >
            <td className="border-r border-blue-400">{item.id}</td>
            <td>{changeDateFormat(item.startTime)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GameSchedule
