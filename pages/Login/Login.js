import { initControler } from "../../utils/route";
import "./Login.css";

const template = () => `
<input type="text" name="" id=""/>
<button id="buttonLogin">LOGIN</button>
`;

const addListener = () => {
    const buttonLogin = document.getElementById("buttonLogin");
    buttonLogin.addEventListener("click", () => {
        const inputLogin = document.querySelector("input");
        localStorage.setItem("user", inputLogin.value);
        if(localStorage.getItem("user"))
        document.querySelector("nav").style.display = "flex";
        initControler();
    })
};

export const printTemplate = () => {
    if(!localStorage.getItem("user"))
        document.querySelector("nav").style.display = "none";
    document.querySelector("main").innerHTML = template();
    addListener();
};