// shows the controls and display

import React from 'react';
import * as rt from 'react-testing-library';
import Controls from '../controls/Controls';
import Display from '../display/Display';

afterEach(rt.cleanup);

describe('Dashboard', () => {
  it('shows display', () => {
    const wrap = rt.render(<Display />);
    wrap.getByTestId(/dc/i);
  });
  it('shows the control', () => {
    const wrap = rt.render(<Controls />);
    wrap.getByTestId(/cc/i);
  });
});
