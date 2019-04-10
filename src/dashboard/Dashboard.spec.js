import React from 'react';
import * as rt from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from '../controls/Controls';
import Display from '../display/Display';

afterEach(rt.cleanup);

// DASHBOARD - tests:
// shows the controls and display

describe('Dashboard Component', () => {
  it('shows display', () => {
    const wrap = rt.render(<Display />);
    wrap.getByTestId(/displayCont/i);
  });
  it('shows the control', () => {
    const wrap = rt.render(<Controls />);
    wrap.getByTestId(/controlsCont/i);
  });
});

// GATE - tests:
// defaults to unlocked and open
// cannot be closed or opened if it is locked

describe('Gate functionality', () => {
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
