const exp = require("constants");
const express = require("express");
const app = express();


const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended : true}));

require("./database/db");
const customerRoute = require("./routes/customerRoute");
app.use(customerRoute);

require("./database/db");
const adminRoute = require("./routes/adminRoute");
app.use(adminRoute),

require("./database/db");
const invoiceRoute = require("./routes/invoiceRoute");
app.use(invoiceRoute),

require("./database/db");
const bookingRoute = require("./routes/bookingRoute");
app.use(bookingRoute),







app.listen("90");