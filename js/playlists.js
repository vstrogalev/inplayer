import { playlists } from "./data.js";
import {createNode} from './utils/createNode.js';
import {PlaylistInfo} from './PlaylistInfo.js';
import {Tracklist} from './Tracklist.js';

export function PlayLists() {
  const playLists = createNode("div", "playlists");

  const playListsArr = playlists.map((playlist) => {
    const playListContainer = createNode("article", "playlist");
    playListContainer.append(
      PlaylistInfo(playlist.playlistInfo),
      Tracklist(playlist.tracks)
    );
    return playListContainer;
  }, []);

  playLists.append(...playListsArr);
  return playLists;
}