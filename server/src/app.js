const express = require('express');
const app = express();

app.use(express.json());

const healthRoute = require('./routes/health');
const estimateRoute = require('./routes/estimate');

app.use('/health', healthRoute);
app.use('/estimate', estimateRoute);

module.exports = app;