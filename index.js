const express = require('express');
const cors = require('cors'); // Import the cors module

const app = express();
const PORT = 80;

// Enable CORS for all routes
app.use(cors());

app.get("/sayHello", (req, res) => {
    res.json({ message: "Hello user" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
