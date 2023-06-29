import url from "./gamedata.js";
const setScore = async (user, score) => {
  const userScore = {
    user: user,
    score: score,
  };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userScore),
  });
  const data = await response.json();
  return data;
};
const fetchData = async () => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data.result;
};
export { setScore, fetchData };
