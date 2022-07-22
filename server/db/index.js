const db = require('./db');

const syncAndSeed = async () => {
    await db.sync({force: true});

    console.log('Synced and seeded!');
};

module.exports = {
    db,
    syncAndSeed,
};