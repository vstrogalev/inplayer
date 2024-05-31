import {createNode} from './utils/createNode.js';
import {PlayLists} from './PlayLists.js';

export function Main() {
  const main = createNode("main");

  const addPlaylistPanel = createNode("div", "add-playlist-panel");
  const title = createNode("h1", "title", "My playlists");
  const button = createNode("button", "button", "Add Playlist");
  addPlaylistPanel.append(title, button);

  main.append(addPlaylistPanel, PlayLists());

  return main;
}