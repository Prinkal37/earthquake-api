import axios from 'axios';
import cache from '../cache/cache';

export async function getEarthquakes(): Promise<any> {
  const cacheKey = 'earthquakes';
  const cached = cache.get(cacheKey);
  if (cached) {
    console.log('Cache hit for /earthquakes');
    return cached;
  }

  const end = new Date().toISOString().split('T')[0];
  const start = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${start}&endtime=${end}`;
  const res = await axios.get(url);

  const earthquakes = res.data.features.map((feature: any) => ({
    id: feature.id,
    place: feature.properties.place,
    magnitude: feature.properties.mag,
    time: feature.properties.time,
    detail: feature.properties.detail
  }));

  cache.set(cacheKey, earthquakes);
  return earthquakes;
}

export async function getEarthquakeById(id: string): Promise<any> {
  const cacheKey = `earthquake-${id}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    console.log(`Cache hit for /earthquakes/${id}`);
    return cached;
  }

  try {
    const url = `https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/${id}.geojson`;
    const res = await axios.get(url);
    cache.set(cacheKey, res.data);
    return res.data;
  } catch (error: any) {
    if (error.response?.status === 404) {
      throw new Error('Not found');
    }
    throw new Error('Failed to fetch from USGS');
  }
}
