const express = require('express');
const router = express.Router();

const profissionais = require("../controllers/profissionais.controler");

router.get("/read", profissionais.read);

module.exports = router;