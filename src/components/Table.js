import React from 'react'
import DataTable from 'react-data-table-component'
import ExpandedComponent from './ExpandedComponent'

// const data = [
//   {
//     title: 'okk',
//     director: 'amber',
//     info: {
//       index: 0,
//       status: 'ok'
//     }
//   },
//   {
//     title: 'okkkk',
//     director: 'amber111',
//     info: {
//       index: 1,
//       status: 'okk'
//     }
//   }
// ]

// const columns = [
//   {
//     name: 'Title',
//     selector: row => row.info.index,
//     sortable: true
//   },
//   {
//     name: 'Director',
//     selector: 'director',
//     sortable: true
//   },
//   {
//     name: 'Year',
//     selector: 'year',
//     sortable: true
//   }
// ]

/*
https://github.com/jbetancur/react-data-table-component
 */

const Hang = ({ content }) => {
  return <p>{content}</p>
}
const Button = () => {
  ;<button>Hello</button>
}

const Table = ({ data }) => {
  const [expandableRows, setExpandableRows] = React.useState(true)
  const [expandOnRowClick, setExpandOnRowClick] = React.useState(true)
  const [striped, setStriped] = React.useState(true)
  const [dense, setDense] = React.useState(true)

  const columns = [
    {
      name: 'Start number',
      selector: row => row.number,
      sortable: true
    },
    {
      name: 'Horse name',
      selector: row => row.horse.name,
      sortable: true
    },
    {
      name: 'Driver',
      selector: row => row.driver.firstName + ' ' + row.driver.lastName,
      sortable: true
    }
  ]

  return (
    <div>
      <DataTable
        columns={columns}
        data={data.starts}
        striped={striped}
        dense={dense}
        noHeader
        expandableRows={expandableRows}
        expandOnRowClicked={expandOnRowClick}
        expandableRowsComponent={<ExpandedComponent data={data.starts} />}
      />
    </div>
  )
}

export default Table
