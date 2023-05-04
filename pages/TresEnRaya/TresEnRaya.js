import "./TresEnRaya.css";

const template = () => `Estoy en Tres en Raya`;

const addListener = () => {};

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
};