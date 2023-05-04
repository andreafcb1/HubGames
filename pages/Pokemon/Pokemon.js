import "./Pokemon.css";

const template = () => `Estoy en Pokemon`;

const addListener = () => {};

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
};
