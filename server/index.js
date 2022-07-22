const express = require('express');
const path = require('path');
const { db, syncAndSeed } = require('./db');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use((req, res, next) => {
    res.redirect('/');
});

// Extension requests 404
app.use((req, res, next) => {
    if (path.extname(req.path).length) {
        const error = new Error('Not found')
        error.status = 404
        next(error)
    } else {
        next()
    }
})

app.use('/api', (req, res, next) =>{
    res.json('Hello World!')
})

// Error logging
app.use((error, req, res, next) => {
    console.error(error)
    console.error(error.stack)
    res.status(error.status || 500).send(error.message || 'Internal server error.')
})

const init = async () => {
    try {
        if (process.env.SEED) {
            await syncAndSeed();
        } else {
            await db.sync();
        };

        app.listen(port, () => {
            console.log(`Server now listening at http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    };
};

init();