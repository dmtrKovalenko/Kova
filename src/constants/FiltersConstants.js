import FilterSelectItem from '../types/FilterSelectItem'

export const genresList = [
    'Alternative Rock','Ambient', 'Classical',
    'Country', 'Dance & EDM', 'Dancehall', 'Deep House',
    'Disco','Drum & Bass', 'Dubstep','Electronic',
    'Folk & Singer-Songwriter','Hip-hop & Rap','House','Indie',
    'Jazz & Blues','Latin','Metal','Piano',
    'Pop','R&B & Soul','Reggae','Rock',
    'Techno','Trance','Trap','Triphop' ]

export const types = [
    'Original', 'Remix', 'Recording',
    'Spoken', 'Podcast', 'Demo', 'In progress',
    'Stem', 'Loop', 'Sound effect', 'Sample']

export const durations = [
    new FilterSelectItem(2, 'Short (less than 4 minutes)',  { from : undefined, to : 240000 }),
    new FilterSelectItem(3, 'Middle (from 4 to 20 minutes)', { from : 240000, to : 1200000 }),
    new FilterSelectItem(4, 'Long (from 20 minutes, to hour)', { from : 1200000, to : 3600000 }),
    new FilterSelectItem(5, 'Extra long (more then hour)', { from : 3600000, to : undefined }),
]

export const bpm = [
    new FilterSelectItem(2, 'Slow', { from : 30, to : 80 }),
    new FilterSelectItem(3, 'Middle', { from : 80, to : 160 }),
    new FilterSelectItem(4, 'Fast', { from : 160, to: 240 })
]