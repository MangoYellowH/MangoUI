import React from 'react';
import { render, cleanup } from '@testing-library/react';
import WithTheme from '../WithTheme';

describe('WithTheme', () => {
  beforeEach(cleanup);
  test('test WithTheme could wrapper correctly', () => {
    const Mock: React.FC<{}> = () => (<div>mock</div>);
    const Wrapper = WithTheme<{}>(Mock, 'mockStyle');
    const { container } = render(<Wrapper />);
    expect(container).not.toBeNull();
  });
});
