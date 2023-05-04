import "./MemoryGame.css";

const template = () => `Estoy en Memory Game`;

const addListener = () => {};

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
};