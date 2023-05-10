import { printTemplate as Dashboard } from '../pages/Dashboard/Dashboard';
import { printTemplate as Login } from '../pages/Login/Login';
import { printTemplate as MemoryGame } from '../pages/MemoryGame/MemoryGame';
import { printTemplate as Pokemon } from '../pages/Pokemon/Pokemon';
import { printTemplate as WhackATopo } from '../pages/WhackATopo/WhackATopo';

export const initControler = (route) => {
    switch (route) {
        case undefined:
            localStorage.getItem("user") ? Dashboard () : Login();
        break;
        case "MemoryGame":
            MemoryGame();
        break;
        case "Pokemon":
            Pokemon();
        break;
        case "WhackATopo":
            WhackATopo();
        break;
        case "Dashboard":
            Dashboard();
        break;
        case "Login":
            Login();
        break;
    }};