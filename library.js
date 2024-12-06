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
             },

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
printPlaylists: function() {
 const playlists = this.playlists; //access playlist using this.
  for(const playlist in playlists) {
   console.log(`${playlists[playlist].id}: ${playlists[playlist].name} - ${playlists[playlist].tracks.length} tracks `);
 }
},

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printTracks: function() {
 const tracks = this.tracks 
  for(const track in tracks) {
   console.log(`${tracks[track].id}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
 }
},
//printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
printPlaylist: function(playlistId) {
       if (playlistId in this.playlists) {
       const playlist = this.playlists[playlistId]
       const tracks = this.tracks
       console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks `)
       for (const track of playlist.tracks) {
       console.log(`${tracks[track].id}: ${tracks[track].name} by ${tracks[track].artist} (${tracks[track].album})`)
    }
 }

},
//printPlaylist("p01");




// adds an existing track to an existing playlist
addTrackToPlaylist: function(trackId, playlistId) {
if (playlistId in this.playlists && trackId in this.tracks) {
const playlist = this.playlists[playlistId]
playlist.tracks.push(trackId)
console.log(playlist);
}
},
//addTrackToPlaylist("t03", "p01");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
generateUid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},


// adds a track to the library
addTrack: function(name, artist, album) {
 //id equals the random unqiuse track id      
const id = this.generateUid();
//the new track has all the parameters plus the new id in the front
const track = { id, name, artist, album};
//takes the original object it now has the new unique id [id] and equals to the track variable
this.tracks[id] = track
//To see the result of the new track in the Library object
console.log(this.tracks)
},
//inputs for the parameters thats getting call into the line 96 variable
//addTrack("ella", "ye", "hello");

// adds a playlist to the library
addPlaylist: function(name) {
const id = this.generateUid();

const playlist = {id, name, tracks:[]}

library.playlists[id] = playlist;

console.log(this.playlists);
},

};

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrackToPlaylist("t03", "p01");
library.addTrack("ella", "ye", "hello")
library.addPlaylist();


//addPlaylist("p03");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};
 