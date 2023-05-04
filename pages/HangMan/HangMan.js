import "./HangMan.css";

const template = () => `Estoy en Hang Man`;

const addListener = () => {};

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
};