const path = require('path');

module.exports = {
    route: (app) => {
        app.get('/', (req, res) => {
            let filepath = path.resolve(__dirname, '../www/index.html');
            res.sendFile(filepath);
        });
    }
};
