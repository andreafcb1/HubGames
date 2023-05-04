import "./WhackATopo.css";

const template = () => `Estoy en Whack a Topo`;

const addListener = () => {};

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
};