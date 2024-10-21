    const express = require('express');
    const path = require('path');
    const logger = require('./middleware/logger');
    const homeRoutes = require('./routes/homeRoutes');
    const submitRoutes = require('./routes/submitRoutes');
    const app = express();


    // Middleware
    app.use(express.json());
    app.use(logger);
    app.use(express.static(path.join(__dirname, '..', 'public')));

    // Routes
    app.use('/', homeRoutes);
    app.use('/', submitRoutes);

    module.exports = app;


