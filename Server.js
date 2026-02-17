Server.js 

Javascript 

const express = require("express"); 
const dotenv = require("dotenv"); 
const connectDB = require("./config/db"); 

dotenv.config(); 
app.use(express.json()); 

app.use("/users", require("./routes/userRoutes"));
app.use("/procurement", require("./routes/procurementRoutes"));
app.use("/sales", require("/routes/salesRoutes"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running onport ${PORT}`));