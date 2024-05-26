const playlists = [
	{
		playlistInfo: {
      id: '1-0',
			playlistCoverImage: "./img/cardImage/image1.jpeg",
			title: "Hip-Hop Hits"
		},
		tracks: [
			{
        id: '1',
				artistName: "Eminem",
				trackTitle: "Rap God",
				trackCoverImage: "./img/cardImage/trackList/track1.jpeg",
				trackAudioSrc: "./audio/Eminem - Rap God.mp3",
				isHot: true,
				duration: 221,
			},
			{
        id: '2',
				artistName: "50 cent",
				trackTitle: "In da Club",
				trackCoverImage: "./img/cardImage/trackList/track1.jpeg",
				trackAudioSrc: "./audio/50cent - In da club.mp3",
				isHot: false,
				duration: 271,
			},
		],
	},
	{
    playlistInfo: {
      id: '1-1',
      playlistCoverImage: "./img/cardImage/image2.jpeg",
      title: "Rap Hits 1990s"
    },
		tracks: [
			{
        id: '3',
				artistName: "Public Enemy",
				trackTitle: "Fight the Power",
				trackCoverImage: "./img/cardImage/trackList/track5.jpeg",
				trackAudioSrc: "./audio/Public Enemy - Fight The Power.mp3",
				isHot: true,
				duration: 282,
			},
			{
        id: '4',
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
 * @returns {HTMLElement} node it's html element with necessary tag and class
 */
function createNode(tag, className, content) {
  const node = document.createElement(tag);
  if (className) {
    node.classList.add(className);
  }
  if (content) {
    node.textContent = content;
  }
  return node;
}

//================================
function App() {
  const container = document.createElement('div');

  container.append(
    Header(),
    Main()
  )
  return container
}

//===========================================
function Header() {
  const header = createNode('header');
  const headerContainer = createNode('div', "header-container");
  const img = createNode('img');
  img.src = "img/logo/logo.svg";
  img.alt = 'logo';

  const logo = createNode('div', "logo-name", 'InPlayer');

  headerContainer.append(
    img,
    logo
  )

  header.append(headerContainer);

  return header
}

//===============================================
function Main() {
  const main = createNode('main');
  const AddPlaylistPanel = createNode('div')
}

const root = document.getElementById('root');
root.append(
  App()
)