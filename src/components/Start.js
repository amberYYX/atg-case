import React from 'react'
import Togglable from './Togglable'

// const Start = ({ startInfo }) => {
//   return (
//     <li>
//       <p>number:{startInfo.number}</p>
//       <p>horse name:{startInfo.horse.name}</p>
//       <p>
//         horse rider:{startInfo.driver.firstName}+{startInfo.driver.lastName}
//       </p>
//       <Togglable buttonLabel="show more info">
//         <p>
//           horse trainer:{startInfo.horse.trainer.firstName} +{' '}
//           {startInfo.driver.lastName}
//         </p>
//         <p>horse father:{startInfo.horse.pedigree.father.name}</p>
//       </Togglable>
//     </li>
//   )
// }

const Start = ({ startInfo }) => {
  return (
    <tr>
      <td className="border px-4 py-2"> {startInfo.number}</td>
      <td className="border px-4 py-2"> {startInfo.horse.name}</td>
      <td className="border px-4 py-2">
        {' '}
        {startInfo.driver.firstName}+{startInfo.driver.lastName}
      </td>
      <td>
        <Togglable buttonLabel="show more info">
          <tr>
            <td className="border px-4 py-2">
              {' '}
              {startInfo.horse.trainer.firstName} + {startInfo.driver.lastName}
            </td>
            <td className="border px-4 py-2">
              {' '}
              {startInfo.horse.pedigree.father.name}
            </td>
          </tr>
        </Togglable>
      </td>
    </tr>
  )
}

export default Start
