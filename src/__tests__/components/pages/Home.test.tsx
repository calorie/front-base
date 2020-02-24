import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../../components/pages/Home';

test('renders learn react link', () => {
  const { getByText } = render(<Home />)
  const textElement = getByText('Home')
  expect(textElement).toBeInTheDocument()
})
