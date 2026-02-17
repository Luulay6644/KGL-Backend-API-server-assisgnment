The project is Karibu Groceries  

Sales Routes 

routes/salesRoutes.js 

const express = require("express"); 
const Procurement = require("../models/Procurement"); 
const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", protect, authorize("Sales Ageent"), async (req, res) => {
    const sale = await 
Sales.create(req.body);
    res.status(201).json(sale);
}); 

module.exports = router;

