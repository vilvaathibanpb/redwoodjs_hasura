import { render } from '@redwoodjs/testing'

import SuperHeroPage from './SuperHeroPage'

describe('SuperHeroPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SuperHeroPage />)
    }).not.toThrow()
  })
})
