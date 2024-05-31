import {createNode} from './utils/createNode.js';

export function ButtonContainer() {
  const buttonContainer = createNode("div", "buttons-container");

  const buttonEdit = createNode("button");
  buttonEdit.append(
    createNode("img", "button-icon", "", "img/icons/edit.svg", "edit")
  );

  const buttonDelete = createNode("button");
  buttonDelete.append(
    createNode("img", "button-icon", "", "img/icons/basket.svg", "delete")
  );

  buttonContainer.append(buttonEdit, buttonDelete);

  return buttonContainer;
}
