const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/bmi', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: String,
    weight: Number,
    height: Number,
    bmi: Number,
    category: String
});

const User = mongoose.model('User', userSchema);

// Sample endpoint to save BMI data
app.post('/api/bmi', async (req, res) => {
    const { username, weight, height, bmi, category } = req.body;
    const user = new User({ username, weight, height, bmi, category });
    await user.save();
    res.send('BMI data saved');
});

// Sample endpoint to get user data
app.get('/api/bmi/:username', async (req, res) => {
    const users = await User.find({ username: req.params.username });
    res.json(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
