import { changeColor } from "../../utils/changeColor";
import { initControler } from "../../utils/route";
import "./Header.css";

const template = () => `
<img src="https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683196968/hub%20games/fd214dafde8fd2e021d4b3030cdf16f3_wnhy3n.png" alt="pokemon games"/>
<nav>
    <img src="https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683792499/dia_o0eiqk.png" id="icon" alt="sunMode"/>
    <button class="buttonHome"><span class="material-symbols-outlined">home</span></button>
    <button class="buttonLogout"><span class="material-symbols-outlined">logout</span></button>
</nav>
`;

// ------ EVENTOS 

const addListener = () => {

const buttonHome = document.querySelector(".buttonHome");
buttonHome.addEventListener("click", () => {
    initControler("Dashboard");
});

const buttonLogout = document.querySelector(".buttonLogout");
buttonLogout.addEventListener("click", () => {
localStorage.removeItem("user");
initControler("Login");
if(!localStorage.getItem("user"))
document.querySelector("nav").style.display = "none";
});
};
//-------PINTAR

export const printTemplate = () => {
    document.querySelector("Header").innerHTML = template();
    addListener();
    changeColor();
};