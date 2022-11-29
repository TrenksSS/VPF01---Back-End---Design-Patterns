 
 const Profissionais = require('../models/profissionais.model');
 const con = require('../dao/avaDAO');
 
const read = (req, res) => {
    con.query(Profissionais.read(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}


module.exports = {
    read,
}