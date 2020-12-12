import React, { useState, useEffect } from 'react';

// function Profile(data) {
//   console.log(data.login);
//   return (
//     <div>
//       <h2>{data.name}</h2>
//       <img src={data.avatar_url} alt={`Profile pic from ${data.login}`}></img>
//       <div style={{ display: 'grid' }}>
//         <span>{data.location}</span>
//         <span>{data.name}</span>
//       </div>
//     </div>
//   );
// }

function AppFetch({ nametag }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const APIurl = 'https://api.github.com/users/';

  useEffect(() => {
    if (!nametag) return;
    setLoading(true);
    fetch(`${APIurl}${nametag}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [nametag]);

  if (loading) <h1>Loading...</h1>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <div>
      <h1>Fetch Data from an API</h1>
      <div>
        <h2>{data.name}</h2>
        <img src={data.avatar_url} alt={`Profile pic from ${data.login}`}></img>
        <div style={{ display: 'grid' }}>
          <span>{data.location}</span>
          <span>{data.name}</span>
        </div>
      </div>
    </div>
  );
}

export default AppFetch;
