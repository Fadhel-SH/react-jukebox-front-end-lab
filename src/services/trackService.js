// src/services/trackService.js

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

// Example function to fetch tracks
export const fetchTracks = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};
