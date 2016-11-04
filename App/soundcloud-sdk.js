window.SC.initialize({
  client_id: 'f4323c6f7c0cd73d2d786a2b1cdae80c'
});

function searchTracks(query){
    SC.get('/tracks', {
        q: query
    }).then(function(tracks) {
        console.log(tracks);

        return tracks;
    });
}