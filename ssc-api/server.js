const express = require('express');
const cors = require('cors');
const members = require('./member_info.json');
const gallery = require('./gallery_info.json');
const videos = require('./videos_info.json');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/members', (req, res) => {
  res.json(members);
});

app.get('/api/members/:id', (req, res) => {
  const member = members.find(m => m.id == req.params.id);
  res.json(member || {});
});

app.get('/api/gallery', (req, res) => {
  res.json(gallery);
});

app.get('/api/videos', (req, res) => {
  res.json(videos);
});

app.get('/api/videos/type/:type', (req, res) => {
  const type = decodeURIComponent(req.params.type);
  const typeVideos = videos[type] || [];
  res.json(typeVideos);
});

app.get('/api/videos/:id', (req, res) => {
  const videoId = parseInt(req.params.id);
  let foundVideo = null;
  
  Object.values(videos).forEach(typeVideos => {
    const video = typeVideos.find(v => v.id === videoId);
    if (video) foundVideo = video;
  });
  
  res.json(foundVideo || {});
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});