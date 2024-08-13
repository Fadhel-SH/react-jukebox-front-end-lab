import { useState } from 'react';
import { addTrack, updateTrack } from '../services/trackService';

const TrackForm = ({ selectedTrack, onSave }) => {
  const [track, setTrack] = useState(selectedTrack || { title: '', artist: '' });

  const handleChange = (e) => {
    setTrack({ ...track, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (track.id) {
      await updateTrack(track.id, track);
    } else {
      await addTrack(track);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={track.title} onChange={handleChange} />
      </div>
      <div>
        <label>Artist:</label>
        <input type="text" name="artist" value={track.artist} onChange={handleChange} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default TrackForm;
