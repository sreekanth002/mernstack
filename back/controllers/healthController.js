// Temporary in-memory data
let directors = [
  {
    name: "Christopher Nolan",
    movies: ["Inception", "Interstellar"],
  },
  {
    name: "Rajamouli",
    movies: ["RRR", "Baahubali"],
  },
];

// ✅ ADD THIS
export const getHealth = (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "API is running",
  });
};

// GET
export const healthCheckup = (req, res) => {
  res.status(200).json({
    status: "success",
    data: directors,
  });
};

// POST
export const addDirector = (req, res) => {
  const { name, movies } = req.body;

  if (!name || !movies) {
    return res.status(400).json({
      message: "Name and movies are required",
    });
  }

  const newDirector = { name, movies };
  directors.push(newDirector);

  res.status(201).json({
    message: "Director added",
    data: newDirector,
  });
};

// DELETE
export const deleteDirector = (req, res) => {
  const { name } = req.params;

  directors = directors.filter((d) => d.name !== name);

  res.status(200).json({
    message: "Director deleted",
    data: directors,
  });
};