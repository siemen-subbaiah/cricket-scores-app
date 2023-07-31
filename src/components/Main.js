import React, { useEffect, useState } from 'react';
import Matches from './Matches';

// const KEY = process.env.REACT_APP_API_KEY;
const KEY = 'c6cf75e3-60e9-45b8-901d-4db8919de80b';
const Main = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.cricapi.com/v1/matches?apikey=${KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setMatches(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1 className='upcoming'>UPCOMING MATCHES</h1>
      {loading ? (
        <h1 className='loding'>LOADING...</h1>
      ) : (
        <div className='matches'>
          {matches.map((match) => (
            <Matches match={match} key={match.unique_id} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Main;
