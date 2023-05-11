import { loading } from "../../components/loading/loading";
import { dataPokemon } from "../../utils/dataPokemon";
import "./Pokemon.css";


let dataServicePokemon;
let typeGlobal;
const template = () => `
<div id="pokemon">
    <div id="containerFilter">
        <div id="filterButton">
        </div>
    <input type="text" id="inputPokemon" placeholder="Busca un pokemon"/>
    <div class="spinner"></div>
    </div>
    <div class="galleryPokemon"></div>
</div>`;


const dataService = async () => {
  document.querySelector(".spinner").innerHTML = loading();
    const getData = await dataPokemon();
    const { type, pokemonData } = getData;
    dataServicePokemon = pokemonData;
    typeGlobal = type;
    document.querySelector(".spinner").innerHTML = "";
    createAndPrintFigure(dataServicePokemon);
    printButtons(type);
};

const createAndPrintFigure = (data) => {
  document.querySelector(".galleryPokemon").innerHTML = "";
  data.map((pokemon) => {
      const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`
      const templateFigure = `
      <figure class=${classCustomType}>
      <img src=${pokemon.image} alt=${pokemon.name}/>
      <h2>${pokemon.name}</h2>
      <p class="info"><span>#${pokemon.id}</span></p>
      <p class="info"><span>Height: ${pokemon.height} m</span></p>
      <p class="info"><span>Weight: ${pokemon.weight} Kg</span></p>
      </figure>
      `;

        document.querySelector(".galleryPokemon").innerHTML += templateFigure;
    })
};

const printButtons = (types) => {
    types.forEach((type) => {
      const idCustom = `button${type[0].toUpperCase() + type.slice(1)}`;
      const buttonType = `<button class="buttonFilter ${type}" id=>${type}</button>`;
      const filterButton = document.getElementById("filterButton");
      filterButton.innerHTML += buttonType;
    });
    
    addListener();
  };

//hacemos un INPUT porque ya tenemos la data dentro de la aplicación, si no, haríamos un CHANGE 
const addListener = () => {
    const inputPokemon = document.getElementById("inputPokemon");
    inputPokemon.addEventListener("input", (e) => {
        filterPokemon(e.target.value, "name");
    });

    typeGlobal.forEach((type) => {
        const buttonType = document.querySelector(`.${type}`);
    
        buttonType.addEventListener("click", (e) => {
          filterPokemon(type, "type");
        });
      });
    };


const filterPokemon = (filtro, donde) => {
    switch (donde) {
        case "name":
            {
                const filterData = dataServicePokemon.filter((pokemon) => 
                pokemon.name.toLowerCase().includes(filtro.toLowerCase())
    );
    createAndPrintFigure(filterData);
}
break;
case "type":
    {
        const filterData = dataServicePokemon.filter((pokemon) =>
        pokemon.type[0].type.name.toLowerCase().includes(filtro.toLowerCase())
   );

   if (filterData.length === 0) {
    const filterData = dataServicePokemon.filter((pokemon) =>
      pokemon.type[1]?.type.name.toLowerCase().includes(filtro.toLowerCase())
    );
    createAndPrintFigure(filterData);
  } else {
    createAndPrintFigure(filterData);
  }

  break;
}}
};







//PINTAR CONTENEDOR GENERAL

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    dataService();
};
