// src/services/trackService.js

const BASE_URL = `${import.meta.env.MONGODB_URI}/tracks`;

// Example function to fetch tracks
export const fetchTracks = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};
