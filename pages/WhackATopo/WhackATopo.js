import "./WhackATopo.css";
import { randomTime } from "../../utils/WhackATopo/randomTime";
import { randomHole } from "../../utils/WhackATopo/randomHole";
import { showMole } from "../../utils/WhackATopo/showMole";
import { startGame, wack } from "../../utils/WhackATopo/score";


const template = () => `
<div class="interface">
<h1>Whack a Diglett</h1>
<span class="score">0</span>
    <button id="startGame">Start!</button>
  <div class="gameTopo">
    <div class="hole hole1">
      <div class="mole"></div>
    </div>
    <div class="hole hole2">
      <div class="mole"></div>
    </div>
    <div class="hole hole3">
      <div class="mole"></div>
    </div>
    <div class="hole hole4">
      <div class="mole"></div>
    </div>
    <div class="hole hole5">
      <div class="mole"></div>
    </div>
    <div class="hole hole6">
      <div class="mole"></div>
    </div>
  </div>
`;


const addListener = () => {;
    //Añadimos a los topos el escuchador del click para saber cuando han clicado
    document
      .querySelectorAll(".mole")
      .forEach((mole) => mole.addEventListener("click", (e) => wack(e)));
  
    document.querySelector("#startGame").addEventListener("click", startGame);
  };

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    addListener();
};