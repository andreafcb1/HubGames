import { showMole } from "./showMole";



export let timeUp = false; 
export let score = 0; 


export const startGame = () => {
  timeUp = false;
  score = 0;
  showMole();

  setTimeout(() => {
    timeUp = true;
  }, 15000);
};

export const wack = (e) => {
  score++;
  e.target.parentNode.classList.remove("up");
  document.querySelector(".score").textContent = score;
};




