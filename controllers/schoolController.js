const db = require('../db');
const getDistance = require('../utils/distance');

exports.addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  // Basic validation
  if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: 'All fields are required and must be valid.' });
  }
  try {
    await db.execute(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, parseFloat(latitude),parseFloat(longitude) ]
    );
    res.status(201).json({ message: 'School added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};

exports.listSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: 'Latitude and longitude must be valid numbers' });
  }
  try {
    const [schools] = await db.execute('SELECT * FROM schools');

    const sorted = schools.map(school => ({
      ...school,
      distance: getDistance(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude
      )
    })).sort((a, b) => a.distance - b.distance);

    res.json(sorted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching schools' });
  }
};

