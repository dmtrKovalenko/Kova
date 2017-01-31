export const genresList = [
    'All',
    'Alternative Rock','Ambient', 'Classical',
    'Country', 'Dance & EDM', 'Dancehall', 'Deep House',
    'Disco','Drum & Bass', 'Dubstep','Electronic',
    'Folk & Singer-Songwriter','Hip-hop & Rap','House','Indie',
    'Jazz & Blues','Latin','Metal','Piano',
    'Pop','R&B & Soul','Reggae','Rock',
    'Techno','Trance','Trap','Triphop' ]

export const types = [
    'All',
    'Original', 'Remix', 'Recording',
    'Spoken', 'Podcast', 'Demo', 'In progress',
    'Stem', 'Loop', 'Sound effect', 'Sample', 'Other' ]

export const durations = [
    'All',
    'Short (less than 4 minutes)',
    'Middle (from 4 to 20 minutes)',
    'Long (from 20 minutes, to hour)', 
    'Extra long (more then hour)' ]

export const bpm = {
    All : null ,
    Slow : { start : 30, end : 80 },
    Middle : { start : 80, end : 160 }, 
    Fast : { start : 160, end: 240 }
}