import React from 'react';

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controls panel" data-testid="controlsCont">
      <button disabled={!closed} onClick={toggleLocked} className="toggle-btn" data-testid="lockButton">
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button data-testid="openGateButton" disabled={locked} onClick={toggleClosed} className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

export default Controls;
