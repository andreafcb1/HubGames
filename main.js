import { printTemplate as 3enRaya } from './pages/3enRaya/3enRaya'
import { printTemplate as Dashboard } from './pages/Dashboard/Dashboard'
import { printTemplate as HangMan } from './pages/HangMan/HangMan'
import { printTemplate as Login } from './pages/Login/Login'
import { printTemplate as MemoryGame } from './pages/MemoryGame/MemoryGame'
import { printTemplate as Pokemon } from './pages/Pokemon/Pokemon'
import { printTemplate as Quiz } from './pages/Quiz/Quiz'
import { printTemplate as WhackATopo } from './pages/WhackATopo/WhackATopo'
import './style.css'

export const initContent = (route) => {
    switch (route) {
        case undefined:
            localStorage.getItem("user") ? Dashboard () : Login();
        break;
        case "3enRaya":
            3enRaya();
        break;
        case "HangMan":
            HangMan();
        break;
        case "MemoryGame":
            MemoryGame();
        break;
        case "Pokemon":
            Pokemon();
        break;
        case "Quiz":
            Quiz();
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

initContent();