import React, { useReducer } from 'react';

function AppThree() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <div>
      <h1>useReducer</h1>
      <input type='checkbox' value={checked} onChange={setChecked} />
      <span>{checked ? 'Checked: True' : 'Checked: False'}</span>
    </div>
  );
}

export default AppThree;
