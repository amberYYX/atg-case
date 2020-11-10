import React from 'react'
import Start from './Start'

const Race = ({ raceInfo }) => {
  // return (
  //   <li className="bg-gray-200" key={raceInfo.name}>
  //     <p>Race number: {raceInfo.number}</p>
  //     <p>Race name: {raceInfo.name}</p>
  //     <p>Race start time: {raceInfo.startTime}</p>
  //     <div>
  //       <p className="text-4xl text-red-800">starts information</p>
  //       <ul>
  //         {raceInfo.starts.map(start => (
  //           <Start key={start.number} startInfo={start}></Start>
  //         ))}
  //       </ul>
  //     </div>
  //   </li>
  // )

  return (
    <li className="bg-gray-200" key={raceInfo.name}>
      <p>Race number: {raceInfo.number}</p>
      <p>Race name: {raceInfo.name}</p>
      <p>Race start time: {raceInfo.startTime}</p>
      <div>
        <p className="text-4xl text-red-800">starts information</p>
        <table className="table-fixed">
          <thead>
            <tr>
              <th className="w-1/4 px-4 py-2">Start Number</th>
              <th className="w-1/4 px-4 py-2">Horse name</th>
              <th className="w-1/4 px-4 py-2">Driver</th>
              <th className="w-1/4 px-4 py-2">more info</th>
            </tr>
          </thead>
          <tbody>
            {raceInfo.starts.map(start => (
              // <tr key={start.number}>
              //   <td className="border px-4 py-2"> {start.number}</td>
              //   <td className="border px-4 py-2"> {start.horse.name}</td>
              //   <td className="border px-4 py-2">
              //     {' '}
              //     {start.driver.firstName}+{start.driver.lastName}
              //   </td>
              // </tr>
              <Start key={start.number} startInfo={start}></Start>
            ))}
          </tbody>
        </table>
        {/* <ul>
          {raceInfo.starts.map(start => (
            <Start key={start.number} startInfo={start}></Start>
          ))}
        </ul> */}
      </div>
    </li>
  )
}

export default Race
