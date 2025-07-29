import { initModoOscuro } from './modoOscuro.js';
import { cargarRelatos } from './relatos.js';
import { initBuscador } from './buscador.js';
import { initVistas } from './vistas.js';
import { initHeaderFijo } from './headerFijo.js';
import { renderAsideRelatos } from './asideRelatos.js';


renderAsideRelatos();
initModoOscuro();
cargarRelatos();
initBuscador();
initVistas();
initHeaderFijo();
