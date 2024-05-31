import {Header} from './Header.js';
import {Main} from './Main.js';

export function App() {
  const container = document.createElement("div");

  container.append(Header(), Main());
  return container;
}