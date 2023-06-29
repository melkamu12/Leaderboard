import url from './gameAPI.js';

const setScore = async (user, score) => {
  const userScore = {
    user,
    score,
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userScore),
  });
  const data = await response.json();
  return data;
};

export default setScore;
