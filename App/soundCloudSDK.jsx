const SCStremUrl = 'https://api.soundcloud.com/tracks/%track.id%/stream?client_id=f4323c6f7c0cd73d2d786a2b1cdae80c';
const trackIdToken = '%track.id%';

class SDK{
    searchTracks(filter, callback){
        SC.get('/tracks', {
            q: filter.query,
            linked_partitioning: 1,
            offset: 0,
            limit: filter.limit,
        }).then(function(tracks) {
            console.log(tracks);

            callback(tracks.collection);
        });
    }
    
    getStreamUrl(track){
        const url = SCStremUrl.replace(trackIdToken, track.id);
        return url;
    }
}

export default SDK;