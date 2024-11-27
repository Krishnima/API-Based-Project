const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
let favoriteCities = [];
app.get('/favorites', (req, res) => {
    res.json({ favoriteCities });
});

app.post('/favorite', (req, res) => {
    const { city } = req.body;

    if (city && !favoriteCities.includes(city)) {
        favoriteCities.push(city);
        return res.status(200).send('City added to favorites');
    }
    
    return res.status(400).send('City already in favorites or invalid');
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
