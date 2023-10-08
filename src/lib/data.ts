import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: 'Foggy_Mind',
    albumId: 7,
    title: "Foggy Mind",
    color: colors.blue,
    cover:
      "https://st.depositphotos.com/41858196/61117/i/450/depositphotos_611179986-stock-photo-magical-enchanted-purple-forest.jpg",
    artists: ["Foggy Mind"],
  },
  {
    id: 'Blade_Runner_type_OST',
    albumId: 8,
    title: "Blade Runner type OST",
    color: colors.pink,
    cover:
      "https://3fc4ed44-3fbc-419a-97a1-a29742511391.selcdn.net/coub_storage/coub/simple/cw_timeline_pic/f4f311d0e59/41d7a2f8fee2327e698bd/med_1547916405_image.jpg",
    artists: ["Foggy Mind, TiggerElPro"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 7,
    "title": "Magical woods",
    "image": "https://st.depositphotos.com/41858196/61117/i/450/depositphotos_611179986-stock-photo-magical-enchanted-purple-forest.jpg",
    "artists": ["Foggy Mind"],
    "album": "Foggy Mind",
    "duration": "3:26"
  },
  {
    "id": 1,
    "albumId": 8,
    "title": "Rzeszów",
    "image": "https://3fc4ed44-3fbc-419a-97a1-a29742511391.selcdn.net/coub_storage/coub/simple/cw_timeline_pic/f4f311d0e59/41d7a2f8fee2327e698bd/med_1547916405_image.jpg",
    "artists": ["Foggy Mind, TiggerElPro"],
    "album": "Blade Runner type OST",
    "duration": "4:09"
  },
]
