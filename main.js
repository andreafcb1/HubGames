import { getPokemon } from './services/pokemon.service';
import { dataPokemon } from './utils/dataPokemon';
import './style.css'

// importamos el template con el header, el main y el footer
import { initTemplate } from './utils/initTemplate';
// importamos la función switch que controla qué página se va a renderizar
import { initControler } from './utils/route';
initTemplate();
// se inicializa el controlador de las páginas en el caso undefined
initControler();

