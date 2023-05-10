import { randomHole } from "./randomHole";
import { randomTime } from "./randomTime";
import { timeUp } from "./score";


export const showMole = () => {
    //Definimos el tiempo que el topo se mantiene asomado
    const time = randomTime(500, 1000);
  
    //Seleccionamos hoyo para añadirle la clase up
    const hole = randomHole(document.querySelectorAll(".hole"));
    hole.classList.add("up");
      //SetTimeout para elimimar la clase

  setTimeout(() => {
    hole.classList.remove("up");

    // Siempre que el tiempo de la partida no haya acabado seguiremos asomando topos
    if (!timeUp) {
      showMole();
    }
  }, time);
};
