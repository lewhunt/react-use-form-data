import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Demo from '../demo/src/demo'

it('matches Snapshot', async () => {
  const { container } = render(<Demo />)
  expect(container).toMatchSnapshot()
})

it('renders initial values from the useFormData hook', () => {
  const { getByTestId } = render(<Demo/>)
  expect(getByTestId('numberField')).toHaveValue(101)
  expect(getByTestId('textField')).toHaveValue('hello world')
  expect(getByTestId('buttonField')).toHaveStyle('background: white')
  expect(getByTestId('checkboxField')).toBeChecked()
})

it('updates values correctly after interaction', () => {
  const { getByTestId } = render(<Demo/>)

  fireEvent.change(getByTestId('numberField'), {target: {value: 102}})
  expect(getByTestId('numberField')).toHaveValue(102)

  fireEvent.change(getByTestId('textField'), {target: {value: 'goodbye'}})
  expect(getByTestId('textField')).toHaveValue('goodbye')

  fireEvent.click(getByTestId('buttonField'))
  expect(getByTestId('buttonField')).toHaveStyle('background: silver')

  fireEvent.click(getByTestId('checkboxField'))
  expect(getByTestId('checkboxField')).not.toBeChecked()
})