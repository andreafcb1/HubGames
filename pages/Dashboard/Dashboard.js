import { helloUser } from "../../utils/hello";
import { initControler } from "../../utils/route";
import "./Dashboard.css";


const template = () => `
<div class="saludo">
<h1>Hola ${helloUser()}, ¡a jugar!</h1>
</div>
<div id="containerDashboard">
    <ul>
        <li>
            <figure id="figurePokemon" class="figureDashboard">
                <img src="https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683222191/hub%20games/Pokedex-nacional_nyinfz.jpg" alt="navigate to page Pokemon" id="imgPokemon"/>
                <h2 class="h2Dashboard">Pokemon</h2>
            </figure>
        </li>
        <li>
            <figure id="figureMemoryGame" class="figureDashboard">
                <img src="https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683222916/hub%20games/matching_games_pokemons_free_online_didibd.jpg" alt="navigate to page memorygame" id="imgMemoryGame"/>
                <h2 class="h2Dashboard">Memory Game</h2>
            </figure>
        </li>
        <li>
            <figure id="figureWhackATopo" class="figureDashboard">
                <img src="https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683221689/hub%20games/ep031a_f5fo8w.jpg" alt="navigate to page WhackATopo" id="imgWhackATopo"/>
                <h2 class="h2Dashboard">Whack a topo</h2>
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
const imgMemoryGame = document.getElementById("imgMemoryGame");
imgMemoryGame.addEventListener("click", () => {
    initControler("MemoryGame");
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