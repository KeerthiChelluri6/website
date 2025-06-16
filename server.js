import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files (CSS, JS, images)
app.use(express.static(__dirname));

// Serve the main portfolio page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve attached assets
app.use('/attached_assets', express.static(path.join(__dirname, 'attached_assets')));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server running on port ${PORT}`);
});