var playlist = {
  'My Bloody Valentine': "a song",
  'Phil Ochs': "love on top",
  'Slowdive': "April",
};

function updatePlaylist (playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle
}


function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName;
  return playlist
}
