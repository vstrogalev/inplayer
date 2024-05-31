import {createNode} from './utils/createNode.js';

export function Header() {
  const header = createNode("header");
  const headerContainer = createNode("div", "header-container");
  headerContainer.append(
    createNode("img", "", "", "img/logo/logo.svg", "logo")
  );

  headerContainer.append(createNode("div", "logo-name", "InPlayer"));

  header.append(headerContainer);

  return header;
}