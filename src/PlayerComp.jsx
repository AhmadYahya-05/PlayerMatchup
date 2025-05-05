// NBAPlayerComparison.jsx
import { useState } from 'react';
import { mockPlayers, StatLabels } from './mockPlayers'; // Import the mock data
import './App.css'; 

export default function PlayerComp() {
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);
  const [searchTermOne, setSearchTermOne] = useState('');
  const [searchTermTwo, setSearchTermTwo] = useState('');
  const [searchResultsOne, setSearchResultsOne] = useState([]);
  const [searchResultsTwo, setSearchResultsTwo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
   
  const searchPlayers = (term, slot) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulating API search with our mock data
      const results = mockPlayers.filter(player => 
        player.name.toLowerCase().includes(term.toLowerCase())
      );
      
      if (slot === 1) {
        setSearchResultsOne(results);
      } else {
        setSearchResultsTwo(results);
      }
    } catch (err) {
      setError("Failed to search players. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const selectPlayer = (player, slot) => {
    if (slot === 1) {
      setPlayerOne(player);
      setSearchResultsOne([]);
      setSearchTermOne('');
    } else {
      setPlayerTwo(player);
      setSearchResultsTwo([]);
      setSearchTermTwo('');
    }
  };

  const renderStatComparison = (statName, label) => {
    if (!playerOne || !playerTwo) return null;
    
    const statOne = playerOne.stats[statName];
    const statTwo = playerTwo.stats[statName];
    
    const playerOneWins = statOne > statTwo;
    const playerTwoWins = statTwo > statOne;
    
    return (
      <div className="stat-row">
        <div className={`stat-value ${playerOneWins ? 'stat-winner' : ''}`}>
          {statOne.toFixed(1)}
        </div>
        <div className="stat-label">
          {label}
        </div>
        <div className={`stat-value ${playerTwoWins ? 'stat-winner' : ''}`}>
          {statTwo.toFixed(1)}
        </div>
      </div>
    );
  };

  return (
    <div className="nba-container">
      <h1 className="app-title">NBA Player Comparison</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="search-container">
        {/* Player One Search */}
        <div className="search-box">
          <div className="search-input-container">
            <input
              type="text"
              value={searchTermOne}
              onChange={(e) => setSearchTermOne(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && searchPlayers(searchTermOne, 1)}
              placeholder="Search for first player..."
              className="search-input"
            />
            <button 
              onClick={() => searchPlayers(searchTermOne, 1)}
              className="search-button"
            >
              Search
            </button>
          </div>
          
          {searchResultsOne.length > 0 && (
            <div className="search-results">
              {searchResultsOne.map(player => (
                <div 
                  key={player.id}
                  onClick={() => selectPlayer(player, 1)}
                  className="search-result-item"
                >
                  <div className="player-name">{player.name}</div>
                  <div className="player-team">{player.team} · {player.position}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Player Two Search */}
        <div className="search-box">
          <div className="search-input-container">
            <input
              type="text"
              value={searchTermTwo}
              onChange={(e) => setSearchTermTwo(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && searchPlayers(searchTermTwo, 2)}
              placeholder="Search for second player..."
              className="search-input"
            />
            <button 
              onClick={() => searchPlayers(searchTermTwo, 2)}
              className="search-button"
            >
              Search
            </button>
          </div>
          
          {searchResultsTwo.length > 0 && (
            <div className="search-results">
              {searchResultsTwo.map(player => (
                <div 
                  key={player.id}
                  onClick={() => selectPlayer(player, 2)}
                  className="search-result-item"
                >
                  <div className="player-name">{player.name}</div>
                  <div className="player-team">{player.team} · {player.position}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {(playerOne || playerTwo) && (
        <div className="comparison-card">
          <div className="player-profiles">
            {/* Player One Profile */}
            <div className={`player-profile ${!playerOne ? 'empty-profile' : ''}`}>
              {playerOne ? (
                <div className="player-info">
                  <img 
                    src={playerOne.image} 
                    alt={playerOne.name}
                    className="player-image"
                  />
                  <h2 className="player-name">{playerOne.name}</h2>
                  <p className="player-team">{playerOne.team} · {playerOne.position}</p>
                </div>
              ) : (
                <div className="empty-player">
                  No player selected
                </div>
              )}
            </div>
            
            {/* Player Two Profile */}
            <div className={`player-profile ${!playerTwo ? 'empty-profile' : ''}`}>
              {playerTwo ? (
                <div className="player-info">
                  <img 
                    src={playerTwo.image} 
                    alt={playerTwo.name}
                    className="player-image"
                  />
                  <h2 className="player-name">{playerTwo.name}</h2>
                  <p className="player-team">{playerTwo.team} · {playerTwo.position}</p>
                </div>
              ) : (
                <div className="empty-player">
                  No player selected
                </div>
              )}
            </div>
          </div>
          
          {/* Stats Comparison Section */}
          {playerOne && playerTwo && (
            <div className="stats-comparison">
              <h3 className="comparison-title">Performance Comparison</h3>
              
              <div className="players-header">
                <div className="player-header">{playerOne.name}</div>
                <div className="stat-spacer"></div>
                <div className="player-header">{playerTwo.name}</div>
              </div>
              
              {Object.entries(StatLabels).map(([key, label]) => 
                renderStatComparison(key, label)
              )}
              
              <div className="stats-legend">
                <p>Stats highlighted in green indicate the player with the better performance in that category</p>
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="footer-note">
        <p>Ahmad Yahya - NBA Comparison APP.</p>
      </div>
    </div>
  );
}