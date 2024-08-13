import { useState, useEffect } from 'react';
import { fetchTracks, deleteTrack } from '../services/trackService';

const TrackList = ({ onEdit, onPlay }) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const loadTracks = async () => {
      const data = await fetchTracks();
      setTracks(data);
    };
    loadTracks();
  }, []);

  const handleDelete = async (trackId) => {
    await deleteTrack(trackId);
    setTracks(tracks.filter((track) => track.id !== trackId));
  };

  return (
    <div>
      <h2>Track List</h2>
      {tracks.map((track) => (
        <div key={track.id}>
          <p>{track.title} by {track.artist}</p>
          <button onClick={() => onPlay(track)}>Play</button>
          <button onClick={() => onEdit(track)}>Edit</button>
          <button onClick={() => handleDelete(track.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
