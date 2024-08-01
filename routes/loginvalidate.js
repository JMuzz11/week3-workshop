module.exports = {
    route: (app) => {
        app.post('/login', (req, res) => {
            const users = [
                { name: 'Jack Murray', email: 'email1@com.au', password: '123' },
                { email: 'email2@com.au', password: '456' },
                { email: 'email3@com.au', password: '789' }
            ];

            const { email, password } = req.body;
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                res.json({ valid: true, user: { name: user.name, email: user.email } });
            } else {
                res.json({ valid: false });
            }
        });
    }
};
