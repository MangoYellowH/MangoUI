import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Input from '..';

describe('Input Component', () => {
  beforeEach(cleanup);
  test('test input could input value and return the value by on change', () => {
    const inputClass = 'InputClass';
    const inputValue = 'mockValue';
    const mockFn = jest.fn();
    const { getByText } = render(
      <Input
        classes={inputClass}
        onChange={mockFn}
        value={inputValue}
      />,
    );
    expect(getByText).not.toBeNull();
    // todo: add test
  });
});
