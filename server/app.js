const config = require('./config/');

const express = require('express');
const expressConfig = require('./config/express');

const mongooseConfig = require('./config/mongoose');
mongooseConfig();

const app = express();
expressConfig(app);

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

const router = require('./router');
app.use(router);

app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}`);
});
