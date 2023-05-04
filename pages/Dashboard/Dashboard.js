import { initControler } from "../../utils/route";
import "./Dashboard.css";

const template = () => `
<div id="containerDashboard">
    <ul>
        <li>
            <figure id="figurePokemon" class="figureDashboard">
                <img src="https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683222191/hub%20games/Pokedex-nacional_nyinfz.jpg" alt="navigate to page Pokemon" id="imgPokemon"/>
                <h2>Pokemon</h2>
            </figure>
        </li>
        <li>
            <figure id="figureTresEnRaya" class="figureDashboard">
                <img src="https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683222354/hub%20games/44404b6cdbcaacaeb519dd2e746b0d8b_tewxwf.jpg" alt="navigate to page TresEnRaya" id="imgTresEnRaya"/>
                <h2>Tres en raya</h2>
            </figure>
        </li>
        <li>
            <figure id="figureHangMan" class="figureDashboard">
                <img src="https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683222418/hub%20games/9ysr3pycqvk91_2_athpem.jpg" alt="navigate to page HangMan" id="imgHangMan"/>
                <h2>Hang Man</h2>
            </figure>
        </li>
        <li>
            <figure id="figureMemoryGame" class="figureDashboard">
                <img src="https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683222916/hub%20games/matching_games_pokemons_free_online_didibd.jpg" alt="navigate to page memorygame" id="imgMemoryGame"/>
                <h2>Memory Game</h2>
            </figure>
        </li>
        <li>
            <figure id="figureQuiz" class="figureDashboard">
                <img src="https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683129656/hub%20games/pokemon-1200x675_rnbp29.jpg" alt="navigate to page Quiz" id="imgQuiz"/>
                <h2>Quiz</h2>
            </figure>
        </li>
        <li>
            <figure id="figureWhackATopo" class="figureDashboard">
                <img src="https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683221689/hub%20games/ep031a_f5fo8w.jpg" alt="navigate to page WhackATopo" id="imgWhackATopo"/>
                <h2>Whack a topo</h2>
            </figure>
        </li>
    </ul>
</div>
`;

const addListener = () => {

const imgPokemon = document.getElementById("imgPokemon");
imgPokemon.addEventListener("click", () => {
    initControler("Pokemon");
});
const imgTresEnRaya = document.getElementById("imgTresEnRaya");
imgTresEnRaya.addEventListener("click", () => {
    initControler("TresEnRaya");
});
const imgHangMan = document.getElementById("imgHangMan");
imgHangMan.addEventListener("click", () => {
    initControler("HangMan");
});
const imgMemoryGame = document.getElementById("imgMemoryGame");
imgMemoryGame.addEventListener("click", () => {
    initControler("MemoryGame");
});
const imgQuiz = document.getElementById("imgQuiz");
imgQuiz.addEventListener("click", () => {
    initControler("Quiz");
});
const imgWhackATopo = document.getElementById("imgWhackATopo");
imgWhackATopo.addEventListener("click", () => {
    initControler("WhackATopo");
});
};



export const printTemplate = () => {
    document.querySelector("main").innerHTML = template ();
    addListener();
};