const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3008;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(routes);

const sess = {
    secret: 'Very secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

sequelize.sync({force:false}).then(()=>{
    app.listen(PORT, () => console.log('App Listening on port: '+ PORT));
});