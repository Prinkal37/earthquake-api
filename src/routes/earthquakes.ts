import express from 'express';
import { getEarthquakes, getEarthquakeById } from '../services/usgs';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await getEarthquakes();
    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = await getEarthquakeById(req.params.id);
    res.json(data);
  } catch (error: any) {
    res.status(404).json({ error: 'Earthquake not found' });
  }
});

export default router;
