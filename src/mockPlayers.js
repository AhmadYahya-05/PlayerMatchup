// This file contains mock player data for the NBA app.
const mockPlayers = [
  {
    id: 1,
    name: "LeBron James",
    team: "Los Angeles Lakers",
    position: "SF",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    stats: {
      ppg: 27.2,
      rpg: 7.5,
      apg: 8.3,
      spg: 1.3,
      bpg: 0.8,
      fg_pct: 52.4,
      three_pct: 36.8,
      ft_pct: 73.1
    }
  },
  {
    id: 2,
    name: "Kevin Durant",
    team: "Phoenix Suns",
    position: "PF",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png",
    stats: {
      ppg: 29.1,
      rpg: 6.8,
      apg: 5.2,
      spg: 0.9,
      bpg: 1.1,
      fg_pct: 53.7,
      three_pct: 41.2,
      ft_pct: 90.5
    }
  },
  {
    id: 3,
    name: "Stephen Curry",
    team: "Golden State Warriors",
    position: "PG",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
    stats: {
      ppg: 25.8,
      rpg: 5.2,
      apg: 6.3,
      spg: 1.4,
      bpg: 0.2,
      fg_pct: 47.5,
      three_pct: 43.1,
      ft_pct: 91.8
    }
  },
  {
    id: 4,
    name: "Giannis Antetokounmpo",
    team: "Milwaukee Bucks",
    position: "PF",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png",
    stats: {
      ppg: 30.4,
      rpg: 11.7,
      apg: 5.8,
      spg: 1.2,
      bpg: 1.5,
      fg_pct: 58.2,
      three_pct: 28.7,
      ft_pct: 69.5
    }
  },
  {
    id: 5,
    name: "Luka Doncic",
    team: "Los Angeles Lakers",
    position: "PG",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png",
    stats: {
      ppg: 32.4,
      rpg: 9.2,
      apg: 9.8,
      spg: 1.4,
      bpg: 0.5,
      fg_pct: 49.4,
      three_pct: 38.2,
      ft_pct: 78.3
    }
  },
  {
    id: 6,
    name: "Nikola Jokic",
    team: "Denver Nuggets",
    position: "C",
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png",
    stats: {
      ppg: 26.4,
      rpg: 12.4,
      apg: 9.0,
      spg: 1.3,
      bpg: 0.9,
      fg_pct: 58.3,
      three_pct: 38.3,
      ft_pct: 81.7
    }
  }
];

// Add a mapping for stat labels to make them accessible
const StatLabels = {
  ppg: "Points Per Game",
  rpg: "Rebounds Per Game",
  apg: "Assists Per Game",
  spg: "Steals Per Game",
  bpg: "Blocks Per Game",
  fg_pct: "FG%",
  three_pct: "3PT%",
  ft_pct: "FT%"
};

export { mockPlayers, StatLabels };