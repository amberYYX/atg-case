import React from 'react'

const RaceHead = ({ info, id }) => {
  const changeDateFormat = stringDate => {
    const date = new Date(stringDate)
    return date.toDateString()
  }

  return (
    <div className="bg-blue-500 px-4 py-2 sm:grid sm:grid-cols-10 sm:gap-4 sm:px-6">
      <dt className="sm:col-span-2 text-5xl font-medium text-orange-100">
        {id}-{info.number}
      </dt>
      <dd className="pt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-8">
        <ul>
          <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
            <div className="w-0 flex-1 flex items-center text-base font-bold -mb-2 text-blue-800">
              {info.name ? info.name : info.status.toUpperCase()}
            </div>
          </li>
          <li className="border-t border-gray-200 pl-3 pr-4 py-3 flex items-center justify-between text-sm leading-5">
            <div className="w-0 flex-1 flex -mt-2 text-blue-900 items-center">
              <strong>{changeDateFormat(info.startTime)}</strong> &#12288;
              {info.startTime.split('T')[1]}
            </div>
          </li>
        </ul>
      </dd>
    </div>
  )
}

export default RaceHead
