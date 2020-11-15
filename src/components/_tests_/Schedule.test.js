import React from 'react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import GameSchedule from '../GameSchedule'

describe('schedule', () => {
  const testInfo = [
    {
      id: '001',
      startTime: '2020-11-16T12:20:00'
    },
    {
      id: '002',
      startTime: '2020-11-16T16:10:00'
    },
    {
      id: '003',
      startTime: '2020-11-16T17:10:00'
    }
  ]

  it('renders default correctly', () => {
    const tree = renderer.create(<GameSchedule data={testInfo} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders content correctly with game id & Formated start Time', () => {
    const component = render(<GameSchedule data={testInfo} />)
    expect(component.container).toHaveTextContent('001')
    expect(component.container).toHaveTextContent('Mon Nov 16 2020, 12:20:00')
  })
})
