
The project is Karibu Groceries

Procurement resourceLimits 

routes/procurementRoutes.js

const express = require("express");
const Procurement("../models/Procurement");
const protect = require("../middleware/authMiddleware"); 
const authorize = require("../middleware/roleMiddleware"); 

const router = express.Router(); 

router.post("/". protect, authorize("Manager"), async (req, res) => 
{
    const procurement = await
Procurement.create(req.body);  
   res.status(201).json(procurement);
}); 

module.exports = router; 