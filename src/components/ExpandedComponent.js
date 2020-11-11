import React from 'react'

//this parameter has to be data!!!
const ExpandedComponent = ({ data }) => {
  return (
    <div className="ml-5 text-sm">
      <p>
        Trainer: &#32;
        {data.horse.trainer.firstName + ' ' + data.horse.trainer.lastName}
      </p>

      <p>
        Father of this horse:&#32; &#32; &#32;
        {data.horse.pedigree.father.name}
      </p>
    </div>
  )
}

export default ExpandedComponent
