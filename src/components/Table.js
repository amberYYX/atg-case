import React from 'react'
import DataTable from 'react-data-table-component'

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

//this parameter has to be data!!!
const SampleExpandedComponent = ({ data }) => {
  // const expan = data.starts
  // console.log('in sample')
  // console.log(expan)
  return (
    <div>
      <p>
        Trainer:
        {data.horse.trainer.firstName + ' ' + data.horse.trainer.lastName}
      </p>

      <p>Father of this horse:{data.horse.pedigree.father.name}</p>
    </div>
  )
}

const Table = ({ data }) => {
  const [selectableRows, setSelectableRows] = React.useState(false)
  const [noSelectAll, setNoSelectAll] = React.useState(false)
  const [
    selectableRowsVisibleOnly,
    setSelectableRowsVisibleOnly
  ] = React.useState(false)
  const [selectableRowsHighlight, setSelectableRowsHighlight] = React.useState(
    false
  )
  const [expandableRows, setExpandableRows] = React.useState(true)
  const [expandOnRowClick, setExpandOnRowClick] = React.useState(true)
  const [pagination, setPagination] = React.useState(true)
  const [highlight, setHighlight] = React.useState(false)
  const [striped, setStriped] = React.useState(false)
  const [pointer, setPointer] = React.useState(false)
  const [dense, setDense] = React.useState(false)
  const [persist, setPersist] = React.useState(false)
  const [tableHead, setNoHead] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [noHeader, setNoHeader] = React.useState(false)
  const [subHeader, setSubHeader] = React.useState(false)
  const [subHeaderAlign, setSubHeaderAlign] = React.useState('right')
  const [fixedHeader, setFixedheader] = React.useState(false)
  const [directionValue, setDirectionValue] = React.useState('auto')

  // const Object2Array = object => {
  //   console.log('object2array')
  //   let newArray = []
  //   for (let i in object) {
  //     newArray.push(object[i])
  //   }
  //   return newArray
  // }

  // const arrayData = Object2Array(data)
  // console.log(arrayData)

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

  // if (data) {
  //   console.log('in table log races type')
  //   console.log(typeof data.starts)
  //   console.log(data.starts)
  // }

  return (
    <div>
      <DataTable
        title="Race info"
        columns={columns}
        data={data.starts}
        defaultSortField="title"
        selectableRows={selectableRows}
        selectableRowsNoSelectAll={noSelectAll}
        selectableRowsHighlight={selectableRowsHighlight}
        selectableRowsVisibleOnly={selectableRowsVisibleOnly}
        expandableRows={expandableRows}
        expandOnRowClicked={expandOnRowClick}
        pagination={pagination}
        highlightOnHover={highlight}
        striped={striped}
        pointerOnHover={pointer}
        dense={dense}
        noTableHead={tableHead}
        persistTableHead={persist}
        progressPending={loading}
        noHeader={noHeader}
        subHeader={subHeader}
        subHeaderComponent={
          <div style={{ display: 'flex', alignItems: 'center' }}></div>
        }
        subHeaderAlign={subHeaderAlign}
        fixedHeader={fixedHeader}
        fixedHeaderScrollHeight="300px"
        direction={directionValue}
        expandableRowsComponent={<SampleExpandedComponent data={data.starts} />}
      />
    </div>
  )
}

export default Table
