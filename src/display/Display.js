import React from 'react';

const Display = ({ closed, locked }) => {
  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;

  return (
    <div className="display panel" data-testid="displayCont">
      <div data-testid="displayLocked" className={lockedClass}>
        {locked ? 'Locked' : 'Unlocked'}
      </div>
      <div data-testid="displayClosed" className={closedClass}>
        {closed ? 'Closed' : 'Open'}
      </div>
    </div>
  );
};

Display.defaultProps = {
  closed: false,
  locked: false
};

export default Display;
