import express from 'express';
import dao from './repositories/dao';
import { FillDatabase, UpdateDatabase } from './utils';
import { testRoutes, cityRoutes, countyRoutes } from './routes';

import cors from 'cors';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Database Setup
dao.setupDbForDev().then(res => {
  console.log(res.msg);
  if(!!!res.data) {
    FillDatabase();
  } else {
    console.log('All city data is set');
    // UpdateDatabase();
  }
}).catch(err => {
  console.log(err);
});

app.use('/test', testRoutes);
app.use('/city', cityRoutes);
app.use('/county', countyRoutes);

app.use((req, res, next) => {
    const error = new Error(`Cannot find ${req.originalUrl} on this server!`);
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).send({
        status: 'fail',
        message: error.message || 'Internal Server Error'
    });
});

const PORT = process.env.PORT || 3080;
app.listen(PORT, () => console.log(`Server listening on the port:: ${PORT}`));
