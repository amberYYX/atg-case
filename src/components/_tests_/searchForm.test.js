import React from 'react'
// import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import SearchForm from '../SearchForm'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'

describe('SearchForm', () => {
  it('has the correct text', () => {
    const handleSearchGameInfo = jest.fn()
    const utils = render(
      <SearchForm handleSearchGameInfo={handleSearchGameInfo} />
    )

    const gameType = utils.getByPlaceholderText('Input game type here')
    const submit = utils.getByRole('button')
    const form = utils.container.querySelector('form')

    fireEvent.change(gameType, { target: { value: 'v4' } })
    fireEvent.submit(form)
    // fireEvent.click(submit)
    expect(handleSearchGameInfo.mock.calls).toHaveLength(1)
    expect(gameType.value).toBe('V4')
  })
})
