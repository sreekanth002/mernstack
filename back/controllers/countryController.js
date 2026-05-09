 let countries = [
  { name: "India", capital: "New Delhi" },
  { name: "USA", capital: "Washington DC" },
  { name: "Japan", capital: "Tokyo" },
  { name: "BADVEL", capital: "KADAPA" }
];

// ✅ GET all countries
export const getCountries = (req, res) => {
  res.status(200).json({
    status: "success",
    count: countries.length,
    data: countries
  });
};

// ✅ POST add country
export const addCountry = (req, res) => {
  console.log("BODY:", req.body);

  const { name, capital } = req.body;

  // 🔥 FIXED CONDITION
  if (!name || !capital) {
    return res.status(400).json({
      message: "Name and capital are required"
    });
  }

  const newCountry = { name, capital };
  countries.push(newCountry);

  res.status(201).json({
    status: "success",
    message: "Country added",
    data: newCountry
  });



};



// DELETE country by name
export const deleteCountry = (req, res) => {
  const { name } = req.params;

  const initialLength = countries.length;

  // remove country
  countries = countries.filter(
    (country) => country.name.toLowerCase() !== name.toLowerCase()
  );

  // check if deleted
  if (countries.length === initialLength) {
    return res.status(404).json({
      message: "Country not found",
    });
  }

  res.status(200).json({
    message: "Country deleted successfully",
    data: countries,
  });
};