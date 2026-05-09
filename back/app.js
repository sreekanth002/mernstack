import express from "express";
import cors from "cors";
import healthRoutes from "./routes/healthRoutes.js";
import countryRoutes from "./routes/countryRoutes.js";

import moviesRoutes from "./routes/moviesRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

// Health routes
app.use("/api/health", healthRoutes);

// Countries routes
app.use("/api/countries", countryRoutes);
//movies routes
app.use("/api/movies",moviesRoutes);

// Test route
app.get("/api/h", (req, res) => {
  console.log(`[TEST ROUTE HIT] ${new Date().toISOString()}`);

  res.status(200).json({
    message: "Test route working",
  });
});



// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

export default app;