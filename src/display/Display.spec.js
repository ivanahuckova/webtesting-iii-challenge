import React from 'react';
import * as rt from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

afterEach(rt.cleanup);

// DISPLAY - tests:
// it displays if gate is open/closed and if it is locked/unlocked
// it displays 'Closed' if the closed prop is true and 'Open' if otherwise
// it displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
// when locked or closed use the red-led class
// when unlocked or open use the green-led class

describe('Display Component', () => {
  it('displays if gate is open', () => {
    const wrap = rt.render(<Display closed={false} />);
    wrap.getAllByText(/open/i);
  });
  it('displays if gate is closed', () => {
    const wrap = rt.render(<Display closed={true} />);
    wrap.getAllByText(/closed/i);
  });
  it('displays if gate is locked', () => {
    const wrap = rt.render(<Display locked={true} />);
    wrap.getAllByText(/locked/i);
  });
  it('displays if gate is unlocked', () => {
    const wrap = rt.render(<Display locked={false} />);
    wrap.getAllByText(/unlocked/i);
  });
  it('when locked uses the red-led class', () => {
    const wrap = rt.render(<Display locked={true} />);
    expect(wrap.getByTestId('displayLocked')).toHaveClass('red-led');
  });
  it('when not locked uses the green-led class', () => {
    const wrap = rt.render(<Display locked={false} />);
    expect(wrap.getByTestId('displayLocked')).toHaveClass('green-led');
  });
  it('when open uses the green-led class', () => {
    const wrap = rt.render(<Display closed={false} />);
    expect(wrap.getByTestId('displayClosed')).toHaveClass('green-led');
  });
  it('when closed uses the red-led class', () => {
    const wrap = rt.render(<Display closed={true} />);
    expect(wrap.getByTestId('displayClosed')).toHaveClass('red-led');
  });
});
