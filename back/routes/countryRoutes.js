import express from "express";


import { addCountry, getCountries, deleteCountry} from "../controllers/countryController.js";

const router = express.Router();
router.get("/",getCountries);
router.post("/add",addCountry);

router.delete("/delete/:name", deleteCountry);
export default router;


