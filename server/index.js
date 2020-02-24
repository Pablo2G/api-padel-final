const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose }= require('./database');
const cors = require('cors');

//Settings
app.set('port', process.env.PORT || 3001);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}));

//Routes
app.use('/api/users', require('./routers/users.routes'));
app.use('/api/court', require('./routers/court.routes'));
app.use('/api/reservation', require('./routers/reservation.routes'));

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(app.get('port'));
})