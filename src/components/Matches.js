import React, { useState } from 'react';

const Matches = ({ match }) => {
  const [score, setScore] = useState({});
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  // const KEY = process.env.REACT_APP_API_KEY;
  const KEY = "mirocey224@sportrid.com"
  const getScore = () => {
    fetch(
      `https://cricapi.com/api/cricketScore?apikey=${KEY}&unique_id=${match.unique_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setScore(data);
        setLoading(false);
      });
  };

  const handleScore = () => {
    getScore();
    setToggle(!toggle);
  };

  return (
    <>
      <div className="match">
        <div className="match-main-info">
          <div className="main-info">
            <h2>{match.name}</h2>
          </div>
        </div>
        <div className="match-sub-info">
          <h2 className="match-type">{match.matchType}</h2>
          <p> {new Date(match.date).toLocaleDateString()}</p>
          <button className="btn" onClick={handleScore}>
            SCORE
          </button>
          <div className="scores">
            {toggle && (
              <>
                {loading ? (
                  <h3>LOADING...</h3>
                ) : (
                  <>
                    <p>{score.stat}</p>
                    <p>{score.description}</p>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Matches;
