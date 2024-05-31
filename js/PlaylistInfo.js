import {createNode} from './utils/createNode.js';
import {ButtonContainer} from './ButtonContainer.js'

export function PlaylistInfo(playlistInfo) {
  const nodeResult = createNode("div", "playlist-info");

  nodeResult.append(
    createNode(
      "img",
      "playlist-cover-image",
      "",
      playlistInfo.playlistCoverImage,
      "cover"
    )
  );

  const titleContainer = createNode("div");
  titleContainer.append(createNode("h2", "title", playlistInfo.title));

  const numberOfTracks = playlistInfo.numberOfTracks;
  titleContainer.append(
    createNode("div", "tracks-count", `${numberOfTracks} tracks`)
  );

  const buttonContainer = ButtonContainer();

  nodeResult.append(titleContainer, buttonContainer);
  return nodeResult;
}