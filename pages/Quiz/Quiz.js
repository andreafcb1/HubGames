import "./Quiz.css";

const template = () => `Estoy en Quiz`;

const addListener = () => {};

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
};