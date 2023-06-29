import { fetchData } from "./get_setdata.js";

const tabledata = document.querySelector(".bordered-table");
let getScore = [];
const DispalyLeaderData = async () => {
  try {
    getScore = await fetchData();
  } catch (error) {
    console.log(error);
    return;
  }
  tabledata.innerHTML = "";
  const rows = getScore.map(({ user, score }) => {
    const scoreRow = document.createElement("tr");
    const scoreName = document.createElement("td");
    scoreName.textContent = `${user}:`;
    const scoreValue = document.createElement("td");
    scoreValue.textContent = `${score}:`;
    scoreRow.appendChild(scoreName);
    scoreRow.appendChild(scoreValue);
    return scoreRow;
  });

  tabledata.append(...rows);
};
export default DispalyLeaderData;
