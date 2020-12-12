import React, { useState, useEffect } from 'react';

function AppTwo() {
  const [Status, setStatus] = useState('True');
  const [StatusSession, setStatusSession] = useState('True');

  useEffect(() => {
    console.log(`The status is: ${Status}`);
  }, [Status]);

  useEffect(() => {
    console.log(`The status of the session is: ${StatusSession}`);
  }, [StatusSession]);
  return (
    <>
      <span>Current status is: {Status}</span>
      <br></br>
      <button onClick={() => setStatus('False')}>Change status</button>
      <br></br>
      <span>Current status is: {StatusSession}</span>
      <br></br>
      <button onClick={() => setStatusSession('False')}>Change status</button>
    </>
  );
}

export default AppTwo;
