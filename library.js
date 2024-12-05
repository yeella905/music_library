const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}; 

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
 const playlists = library.playlists
  for(const playlist in playlists) {
   console.log(`${playlists[playlist].id}: ${playlists[playlist].name} - ${playlists[playlist].tracks.length} tracks `);
 }
};
// printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

const printTracks = function() {
 const tracks = library.tracks 
  for(const track in tracks) {
   console.log(`${tracks[track].id}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
 }
};
// printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       if (playlistId in library.playlists) {
       const playlist = library.playlists[playlistId]
       const tracks = library.tracks
       console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks `)
       for (const track of playlist.tracks) {
       console.log(`${tracks[track].id}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
    }
 }
}
//printPlaylist("p01");




// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
if (playlistId in library.playlists && trackId in library.tracks) {
const playlist = library.playlists[playlistId]
playlist.tracks.push(trackId)
console.log(playlist);
}
};
addTrackToPlaylist("t03", "p01");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {

}


// adds a playlist to the library
const addPlaylist = function(name) {

}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}