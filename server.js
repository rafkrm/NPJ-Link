const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

let redirectUrls = {
    iosUrl: 'https://apps.apple.com/app/obama-run-2024/id1576515186',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.kramermedia.obamarun'
};

// Endpoint to get redirect URLs
app.get('/redirect-urls', (req, res) => {
    res.json(redirectUrls);
});

// Endpoint to update redirect URLs
app.post('/update-redirect-urls', (req, res) => {
    const { iosUrl, androidUrl } = req.body;
    redirectUrls.iosUrl = iosUrl || redirectUrls.iosUrl;
    redirectUrls.androidUrl = androidUrl || redirectUrls.androidUrl;
    res.json({ message: 'Redirect URLs updated successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});