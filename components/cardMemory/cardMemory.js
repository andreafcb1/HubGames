import { checkCards, randomize, resetGame } from "../../utils/MemoryGameUtil/memory.utils";
import { initControler } from "../../utils/route";
import "./cardMemory.css";

let move;

//Función de generador de tarjetas
export const cardGenerator = () => {
    move = 0;
    const cardData = randomize();

    const section = document.querySelector("section");
    
    // Hacemos un forEach para que me recorra el array y me cree una carta para cada objeto, con sus dos caras A y B y agregamos clases a cada tipo
cardData.forEach((element) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("img");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
// añadimos la info de las cartas
face.src = element.imgSrc;
back.src =
      "https://res.cloudinary.com/dpkqzc5zh/image/upload/v1683712936/memorygame/IMG_1462_wke84p.jpg";
card.setAttribute("name", element.alt);
    // añadimos las cartas a la sección, y añadimos las caras A y B a las cartas
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    addListeners(card);
});
};
const addListeners = (card) => {
    card.addEventListener("click", (e) => {
      move++;
      card.classList.toggle("toggleCard");
      checkCards(e);
      resetGame(move);
    });
  };