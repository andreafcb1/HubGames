import { initControler } from "../../utils/route";
import "./Header.css";

const template = () => `
<img src="https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683196968/hub%20games/fd214dafde8fd2e021d4b3030cdf16f3_wnhy3n.png" alt="pokemon games"/>
<nav>
    <button class="lightmood"><span class="material-symbols-outlined">emoji_objects</span></button> 
    <button class="buttonHome"><span class="material-symbols-outlined">home</span></button>
    <button class="buttonLogout"><span class="material-symbols-outlined">logout</span></button>
</nav>
<button class="hamburger"><span class="material-symbols-outlined"> menu </span></button>
`;

// ------ EVENTOS 

const addListener = () => {

const buttonHome = document.getElementsByClassName("buttonHome");
buttonHome.addEventListener("click", () => {
    initControler("Dashboard");
});

const buttonLogout = document.getElementsByClassName("buttonLogout");
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
};