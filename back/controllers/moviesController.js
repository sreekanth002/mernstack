// Temporary in-memory data
// Temporary in-memory data
let moviesList = [
  {
    name: "Chiranjeevi",
    surname: "Konidela",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqc9-xo6xE_8vcB--84XSUUg_2hRNjgtIemQ&s"
  },
  {
    name: "NTR",
    surname: "Nandamuri",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqc9-xo6xE_8vcB--84XSUUg_2hRNjgtIemQ&s"
  },
  {
    name: "Shiva",
    surname: "Akumalle",
    image: "https://www.zee5.com/global/blog/wp-content/uploads/2024/02/9.jpg"
  }
];

// ✅ GET all movies
export const getAllMovies = (req, res) => {
  console.log("GET /movies hit");

  res.status(200).json({
    status: "success",
    count: moviesList.length,
    data: moviesList
  });
};

// ✅ POST add movie (single + bulk support)
export const addMovie = (req, res) => {
  const body = req.body;

  console.log("BODY:", body);

  // 🔥 BULK INSERT (array)
  if (Array.isArray(body)) {
    const validMovies = body.filter(
      (item) => item.name && item.surname
    );

    moviesList.push(...validMovies);

    return res.status(201).json({
      status: "success",
      message: "Multiple movies added",
      count: validMovies.length,
      data: validMovies
    });
  }

  // 🔥 SINGLE INSERT
  const { name, surname } = body;

  if (!name || !surname) {
    return res.status(400).json({
      status: "fail",
      message: "Name and surname are required"
    });
  }

  const newMovie = { name, surname };
  moviesList.push(newMovie);

  res.status(201).json({
    status: "success",
    message: "Movie added successfully",
    data: newMovie
  });
};