import { cardGenerator } from "../../components/cardMemory/cardMemory";
import "./MemoryGame.css";


const template = () =>  `
<div class="game">
<section></section>
</div>
`;

const addListener = () => {};

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    cardGenerator();
};