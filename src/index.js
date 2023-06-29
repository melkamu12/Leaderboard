import './Style/style.css';
import setScore from './module/Setdata.js';
import DispalyLeaderData from './module/DispalyLeaderGame.js';

DispalyLeaderData();
const refBtn = document.querySelector('.btnSubmit');
const formValue = document.querySelector('form');
refBtn.addEventListener('click', async () => {
  DispalyLeaderData();
});
formValue.addEventListener('submit', async (event) => {
  event.preventDefault();

  const userName = document.querySelector('.userName').value;
  const userScore = document.querySelector('.textScore').value;

  formValue.reset();
  await setScore(userName, userScore);
});
