// CONTROLS:
// provide buttons to toggle the closed and locked states.
// buttons' text changes to reflect the state the door will be in if clicked
// the closed toggle button is disabled if the gate is closed
// the locked toggle button is disabled if the gate is open

import React from 'react';
import * as rt from 'react-testing-library';
import Controls from './Controls';
import 'jest-dom/extend-expect';
afterEach(rt.cleanup);

describe('Controls Component', () => {
  it('provide buttons to toggle the closed state', () => {
    const wrap = rt.render(<Controls />);
    wrap.getAllByTestId('openGateButton');
  });
  it('provide buttons to toggle the locked state', () => {
    const wrap = rt.render(<Controls />);
    wrap.getAllByTestId('lockGateButton');
  });
  it('buttons text changes to reflect locked state', () => {
    const wrap = rt.render(<Controls locked={true} />);
    expect(wrap.getByTestId('lockGateButton')).toBeDisabled();
    expect(wrap.getByTestId('lockGateButton')).toHaveTextContent(/unlock/i);
  });
  it('buttons text changes to reflect unlocked state', () => {
    const wrap = rt.render(<Controls locked={false} />);
    expect(wrap.getByTestId('lockGateButton')).toHaveTextContent(/lock/i);
  });

  it('buttons text changes to reflect closed state', () => {
    const wrap = rt.render(<Controls closed={true} />);
    expect(wrap.getByTestId('openGateButton')).toHaveTextContent(/open/i);
  });
  it('buttons text changes to reflect open state', () => {
    const wrap = rt.render(<Controls closed={false} />);
    expect(wrap.getByTestId('openGateButton')).toHaveTextContent(/close/i);
  });
  it('the closed toggle button is disabled if the gate is locked', () => {
    const wrap = rt.render(<Controls locked={true} />);
    expect(wrap.getByTestId('openGateButton')).toBeDisabled();
  });
  it('the locked toggle button is disabled if the gate is open', () => {
    const wrap = rt.render(<Controls closed={false} />);
    expect(wrap.getByTestId('lockGateButton')).toBeDisabled();
  });
});
