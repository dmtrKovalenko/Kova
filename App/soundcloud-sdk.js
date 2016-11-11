
function searchTracks(query, callback){
    SC.get('/tracks', {
        q: query,
        streamable:true,
    }).then(function(tracks) {
        console.log(tracks);

        callback(tracks);
    });
}