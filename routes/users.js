app.get('/users', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json({
        users:[{
            name: 'Hcode',
            email: 'contato@hcode.com.br',
            id: 1
        }]
    });

});