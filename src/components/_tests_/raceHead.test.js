import React from 'react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import RaceHead from '../RaceHead'

describe('RaceHead', () => {
  const testInfo = {
    number: 6,
    name: 'game name',
    status: 'upcoming',
    startTime: '2020-11-13T19:55:00'
  }

  const id = 'V4'

  it('renders default correctly', () => {
    const tree = renderer.create(<RaceHead info={testInfo} id={id} />)
    expect(tree).toMatchSnapshot()
  })

  it('renders content correctly with game name', () => {
    const component = render(<RaceHead info={testInfo} id={id} />)
    expect(component.container).toHaveTextContent(6)
    expect(component.container).toHaveTextContent('V4')
    expect(component.container).toHaveTextContent('game name')
    expect(component.container).toHaveTextContent('Fri Nov 13 2020 19:55:00')
  })

  const testInfo_without_game_name = {
    number: 6,
    status: 'upcoming',
    startTime: '2020-11-13T19:55:00'
  }

  it('renders content correctly with no game name', () => {
    const component = render(
      <RaceHead info={testInfo_without_game_name} id={id} />
    )
    expect(component.container).toHaveTextContent(6)
    expect(component.container).toHaveTextContent('V4')
    expect(component.container).toHaveTextContent('UPCOMING')
    expect(component.container).toHaveTextContent('Fri Nov 13 2020 19:55:00')
  })
})
