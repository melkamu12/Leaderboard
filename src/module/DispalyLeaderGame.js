import fetchData from './fetchdata.js';

const tabledata = document.querySelector('.bordered-table');
const DispalyLeaderData = async () => {
  const getScore = await fetchData();
  tabledata.innerHTML = '';
  const rows = getScore.map(({ user, score }) => {
    const scoreRow = document.createElement('tr');
    const scoreName = document.createElement('td');
    scoreName.textContent = `${user}:`;
    const scoreValue = document.createElement('td');
    scoreValue.textContent = `${score}:`;
    scoreRow.appendChild(scoreName);
    scoreRow.appendChild(scoreValue);
    return scoreRow;
  });

  tabledata.append(...rows);
};
export default DispalyLeaderData;
