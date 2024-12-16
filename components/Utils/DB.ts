import { PlaceProps } from '@/models/place';
import * as SQLite from 'expo-sqlite';
import { Place } from '../../models/place';


const database = SQLite.openDatabaseSync('places.db');

export function init() {
  return database.runAsync(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
        )
    `);
}

export function insertPlace(place: PlaceProps) {
  return database.runAsync(
    `
            INSERT INTO places (title, imageUri, address, lat, lng)
            VALUES (?, ?, ?, ?, ?)
        `,
    [
      place.title,
      place.imageUri,
      place.address,
      place.lat,
      place.lng,
    ]
  );
}

export async function fetchPlaces() {
  const result: PlaceProps[] = await database.getAllAsync('SELECT * FROM places');
  // console.log(result, 'from fetchPlaces')
  const places = [];

  for (const dp of result) {
    places.push(
      new Place(dp.id, dp.title, dp.imageUri, dp.address, dp.lat, dp.lng)
    );
  }
  // console.log(places, 'all places')
  return places;
}

export async function fetchPlaceDetails(id: number) {
  const dbPlace: PlaceProps | null = await database.getFirstAsync(
    'SELECT * FROM places WHERE id = ?',
    [id]
  );

  if (!dbPlace) {
    throw new Error(`Place with id ${id} not found`);
  }
  const place = new Place(dbPlace.id, dbPlace.title, dbPlace.imageUri, dbPlace.address, dbPlace.lat, dbPlace.lng);

  return place;
}