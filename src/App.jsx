import { useState } from 'react';
import TrackList from './components/TrackList';
import TrackForm from './components/TrackForm';
import NowPlaying from './components/NowPlaying';

const App = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [playingTrack, setPlayingTrack] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (track) => {
    setSelectedTrack(track);
    setShowForm(true);
  };

  const handlePlay = (track) => {
    setPlayingTrack(track);
  };

  const handleSave = () => {
    setShowForm(false);
    setSelectedTrack(null);
  };

  return (
    <div>
      <h1>Reactville Jukebox</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add New Track'}
      </button>
      {showForm && <TrackForm selectedTrack={selectedTrack} onSave={handleSave} />}
      <TrackList onEdit={handleEdit} onPlay={handlePlay} />
      <NowPlaying track={playingTrack} />
    </div>
  );
};

export default App;
