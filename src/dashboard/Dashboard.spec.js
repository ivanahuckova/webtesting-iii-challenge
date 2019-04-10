// DASHBOARD: shows the controls and display
// GATE: defaults to unlocked and open
//GATE: cannot be closed or opened if it is locked

import React from 'react';
import * as rt from 'react-testing-library';
import Controls from '../controls/Controls';
import Display from '../display/Display';

afterEach(rt.cleanup);

describe('Dashboard', () => {
  it('shows display', () => {
    const wrap = rt.render(<Display />);
    wrap.getByTestId(/displayCont/i);
  });
  it('shows the control', () => {
    const wrap = rt.render(<Controls />);
    wrap.getByTestId(/controlsCont/i);
  });
  it('gate default is unlocked', () => {
    const wrap = rt.render(<Display />);
    wrap.getByText(/unlocked/i);
  });
  it('gate default is open', () => {
    const wrap = rt.render(<Display />);
    wrap.getByText(/open/i);
  });
  it('gate is not closed when locked', () => {
    const displWrap = rt.render(<Display locked={true} />);
    const contrWrap = rt.render(<Controls locked={true} />);
    expect(displWrap.queryAllByText(/locked/i)).toBeTruthy();
    expect(displWrap.queryAllByText(/closed/i)).toBeTruthy();
    expect(contrWrap.queryAllByText(/unlock/i)).toBeTruthy();
    expect(contrWrap.getByTestId('openGateButton')).toHaveProperty('disabled');
  });
});
