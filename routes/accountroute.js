const path = require('path');

module.exports = {
    route: (app) => {
        app.get('/account', (req, res) => {
            let filepath = path.resolve(__dirname, '../www/account.html');
            res.sendFile(filepath);
        });
    }
};
