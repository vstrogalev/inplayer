import {ButtonContainer} from './ButtonContainer.js'
import {createNode} from './utils/createNode.js';

export function Tracklist(tracks) {
  function AddTrackPanel() {
    // Создаем основной контейнер для панели добавления треков
    const panel = createNode("div", "add-track-panel");

    // Создаем заголовок панели
    panel.append(createNode("h3", "tracklist-title", "Tracks"));

    // Создаем кнопку добавления трека
    const button = createNode("button", "button-add-track");

    // Создаем изображение для кнопки и добавляем его в кнопку
    button.append(createNode("img", "", "", "img/icons/add.svg", "add"));

    // Добавляем текст в кнопку после изображения
    button.append(document.createTextNode("Add Track"));

    // Добавляем кнопку в панель
    panel.append(button);

    return panel;
  }

  function List(tracks) {
    const listContainer = createNode("ul", "list");

    const tracksNodes = tracks.map((track) => {
      const trackElement = createNode("li", "track-element");

      trackElement.append(
        createNode(
          "img",
          "track-cover-image",
          "",
          track.trackCoverImage,
          "track-cover"
        )
      );

      const trackDetails = createNode("div", "track-details");

      const trackTopLine = createNode("div", "track-top-line");
      track.isHot &&
        trackTopLine.append(
          createNode("img", "track-status", "", "img/icons/hot.svg", "hot")
        );

      const trackInfo = createNode("div", "track-info");
      trackInfo.append(
        createNode(
          "div",
          "track-name",
          `${track.artistName} - ${track.trackTitle}`
        )
      );
      const buttonContainer = ButtonContainer();

      trackInfo.append(buttonContainer);
      trackTopLine.append(trackInfo);

      const audio = createNode("audio", "", "", track.trackAudioSrc);
      audio.controls = true;

      trackDetails.append(trackTopLine, audio);

      trackElement.append(trackDetails);

      return trackElement;
    });

    listContainer.append(...tracksNodes);
    return listContainer;
  }

  const tracklist = createNode("div", "tracklist");

  tracklist.append(AddTrackPanel(), List(tracks));

  return tracklist;
}