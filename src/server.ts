import express from 'express';
import earthquakeRoute from './routes/earthquakes';
import rateLimiter from './middleware/rateLimiter';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(rateLimiter); // Apply rate limiting globally
app.use('/earthquakes', earthquakeRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
