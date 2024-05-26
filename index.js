// data
/*
const info = {
  title: 'it-incubator',
  graduatesCount: 2000,
  areYouChampion: true,
  technologies: [{title: 'Front', id: 1}, {title: 'Back', id: 2}, {title: 'DevOps', id: 3}]
}

const htmlElementSelectTechnologies = document.createElement('select');
const htmlElementOption01Technologies = document.createElement('option');
htmlElementOption01Technologies.value = info.technologies[0].id;
htmlElementOption01Technologies.textContent = info.technologies[0].title;
const htmlElementOption02Technologies = document.createElement('option');
htmlElementOption02Technologies.value = info.technologies[1].id;
htmlElementOption02Technologies.textContent = info.technologies[1].title;
const htmlElementOption03Technologies = document.createElement('option');
htmlElementOption03Technologies.value = info.technologies[2].id;
htmlElementOption03Technologies.textContent = info.technologies[2].title;

htmlElementSelectTechnologies.append(htmlElementOption01Technologies)
htmlElementSelectTechnologies.append(htmlElementOption02Technologies)
htmlElementSelectTechnologies.append(htmlElementOption03Technologies)
document.body.appendChild(htmlElementSelectTechnologies);

console.log(htmlElementSelectTechnologies)
*/

const playlist1 = {
	// вот здесь должны быть ваши св-ва
	albumImg: "http://...",
	title: "Hip-Hop Hits",
	tracks: [
		{
			artist: "Eminem",
			song: "Rap God",
			imgSrc: "http://...",
			audioSrc: "http://...",
			liked: true,
			duration: 221,
		},
		{
			artist: "50 cent",
			song: "In da Club",
			imgSrc: "http://...",
			audioSrc: "http://...",
			liked: false,
			duration: 271,
		},
	],
};

const playlistNode = document.createElement("section");

// header
const sectionHeader = document.createElement("div");

// img
const sectionHeaderImg = document.createElement("img");
sectionHeaderImg.src = "./assets/images/hiphopalbum.png";
sectionHeader.appendChild(sectionHeaderImg);

// p Playlist
const sectionHeaderP = document.createElement("p");
sectionHeaderP.textContent = "Playlist";
sectionHeader.appendChild(sectionHeaderP);
// title
const sectionTitle = document.createElement("h2");
sectionTitle.textContent = playlist1.title;
sectionHeader.appendChild(sectionTitle);

// number of tracks, duration
const sectionInfo = document.createElement("p");
const numberOfTracks = playlist1.tracks.length;
const duration = playlist1.tracks.reduce((acc, el) => {
	return acc + el.duration;
}, 0);
const durationMins = Math.floor(duration / 60);
const durationSecs = Math.floor(duration % 60);

sectionInfo.textContent = `${numberOfTracks} tracks, ${durationMins}m ${durationSecs}s`;
sectionHeader.appendChild(sectionInfo);

// artists
const sectionArtist = document.createElement("p");
//  and others = 11 chars
// string length not more than 35 chars minus 10 chars for ' and others'
let i = 0;
let artists = playlist1.tracks[i].artist;

while (artists.length <= 35 && i < playlist1.tracks.length) {
  if ((i + 1) <= playlist1.tracks.length - 1 ) {
    if (artists.length + playlist1.tracks[i+1].artist.length + 2 < 25) {
      artists += ', ' + playlist1.tracks[i+1].artist;
    }
  }
  i++;
}

artists += ' and others';
sectionArtist.textContent = artists;

// connect artists to section header
sectionHeader.appendChild(sectionArtist);

// connect header
playlistNode.appendChild(sectionHeader);

// songs
const songs = document.createElement("ul");

Array.from(playlist1).forEach((element) => {
	// song
	const song = document.createElement("li");
	// song__img

	// song__artist

	// song__artistLike

	// song__artistName

	// song__artistSongName

	// song__player

	// song__playerControls

	// song__playerMute

	// song__playerOther

	// add song to list
	songs.appendChild(song);
});
playlistNode.appendChild(songs);

document.body.appendChild(playlistNode);
