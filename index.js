const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Routes
const publicationRoutes = require('./routes/publicationRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes')
const cors = require('cors');

connectDB();
dotenv.config();

const app = express();
app.use(express.static(`${__dirname}/public`))

app.use(express.json({ limit: '10kb' }));

app.use(cors());
app.use('/api/v1/publication', publicationRoutes);

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/auth', authRoutes);

const port = process.env.PORT || 4500;

app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});