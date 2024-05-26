const playlists = [
  {
    playlistInfo: {
      id: "1-0",
      playlistCoverImage: "./img/cardImage/image1.jpeg",
      title: "Hip-Hop Hits",
      numberOfTracks: 2,
    },
    tracks: [
      {
        id: "1",
        artistName: "Eminem",
        trackTitle: "Rap God",
        trackCoverImage: "./img/cardImage/trackList/track1.jpeg",
        trackAudioSrc: "./audio/Eminem - Rap God.mp3",
        isHot: true,
        duration: 221,
      },
      {
        id: "2",
        artistName: "50 cent",
        trackTitle: "In da Club",
        trackCoverImage: "./img/cardImage/trackList/track2.jpeg",
        trackAudioSrc: "./audio/50cent - In da club.mp3",
        isHot: false,
        duration: 271,
      },
    ],
  },
  {
    playlistInfo: {
      id: "1-1",
      playlistCoverImage: "./img/cardImage/image2.jpeg",
      title: "Rap Hits 1990s",
      numberOfTracks: 2,
    },
    tracks: [
      {
        id: "3",
        artistName: "Public Enemy",
        trackTitle: "Fight the Power",
        trackCoverImage: "./img/cardImage/trackList/track5.jpeg",
        trackAudioSrc: "./audio/Public Enemy - Fight The Power.mp3",
        isHot: true,
        duration: 282,
      },
      {
        id: "4",
        artistName: "Vanila Ice",
        trackTitle: "Ice Ice Baby",
        trackCoverImage: "./img/cardImage/trackList/track6.jpeg",
        trackAudioSrc: "./audio/Vanila Ice - Ice Baby.mp3",
        isHot: false,
        duration: 268,
      },
    ],
  },
];

/**
 * @param {string} tag it's tag, that will be created
 * @param {string} [className] it's class that will be added
 * @param {string} [content] text content
 * @param {string} [src] src for img tag
 * @param {string} [alt] alt for img tag
 * @returns {HTMLElement} node it's html element with necessary tag and class
 */
function createNode(tag, className, content, src, alt) {
  const node = document.createElement(tag);
  className && node.classList.add(className);

  if (content) {
    node.textContent = content;
  }
  if (src) {
    node.src = src;
  }
  if (tag === "img" && alt) {
    node.alt = alt;
  }
  return node;
}

//================================
function App() {
  const container = document.createElement("div");

  container.append(Header(), Main());
  return container;
}

//===========================================
function Header() {
  const header = createNode("header");
  const headerContainer = createNode("div", "header-container");
  headerContainer.append(
    createNode("img", "", "", "img/logo/logo.svg", "logo")
  );

  headerContainer.append(createNode("div", "logo-name", "InPlayer"));

  header.append(headerContainer);

  return header;
}

//===============================================
function Main() {
  const main = createNode("main");

  const addPlaylistPanel = createNode("div", "add-playlist-panel");
  const title = createNode("h1", "title", "My playlists");
  const button = createNode("button", "button", "Add Playlist");
  addPlaylistPanel.append(title, button);

  main.append(addPlaylistPanel, PlayLists());

  return main;
}

//============================================
function PlayLists() {
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

//===========================================
// includes buttons edit and delete to use in PlaylistInfo and in Tracklist
function ButtonContainer() {
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

//=========================================
function PlaylistInfo(playlistInfo) {
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

//=========================================
function Tracklist(tracks) {
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
    const listContainer = createNode('ul', 'list');

    const tracksNodes = tracks.map(track => {
      const trackElement = createNode('li', 'track-element')

      trackElement.append(createNode('img', 'track-cover-image', '', track.trackCoverImage, 'track-cover'));

      const trackDetails = createNode('div', 'track-details');

      const trackTopLine = createNode('div', 'track-top-line');
      track.isHot && trackTopLine.append(createNode('img', 'track-status', '', 'img/icons/hot.svg', 'hot'))

      const trackInfo = createNode('div', 'track-info')
      trackInfo.append(createNode('div', 'track-name', `${track.artistName} - ${track.trackTitle}`));
      const buttonContainer = ButtonContainer();

      trackInfo.append(buttonContainer);
      trackTopLine.append(trackInfo);

      const audio = createNode('audio', '', '', track.trackAudioSrc);
      audio.controls = true;

      trackDetails.append(
        trackTopLine,
        audio
      );

      trackElement.append(trackDetails);

      return trackElement
    })

    listContainer.append(...tracksNodes);
    return listContainer;
  }

  const tracklist = createNode("div", "tracklist");

  tracklist.append(
    AddTrackPanel(),
    List(tracks)
  );

  return tracklist;
}

//==========================================
const root = document.getElementById("root");
root.append(App());
