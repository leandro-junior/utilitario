import { render, screen } from '@testing-library/react'

import TextUppercase from '.'

describe('<TextUppercase />', () => {
  it('should render the heading', () => {
    const { container } = render(<TextUppercase />)

    expect(
      screen.getByRole('heading', { name: /TextUppercase/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
