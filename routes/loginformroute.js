const path = require('path');

module.exports = {
    route: (app) => {
        app.get('/login', (req, res) => {
            let filepath = path.resolve(__dirname, '../www/login.html');
            res.sendFile(filepath);
        });
    }
};
