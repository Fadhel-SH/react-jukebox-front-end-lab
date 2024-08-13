// src/services/trackService.js
const BASE_URL = `${import.meta.env.MONGODB_URI}/tracks`;

export const fetchTracks = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const addTrack = async (track) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(track),
  });
  return response.json();
};

export const updateTrack = async (trackId, track) => {
  const response = await fetch(`${BASE_URL}/${trackId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(track),
  });
  return response.json();
};

export const deleteTrack = async (trackId) => {
  await fetch(`${BASE_URL}/${trackId}`, {
    method: 'DELETE',
  });
};
