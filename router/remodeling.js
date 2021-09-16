const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("리모델링");
});

router.get('/other', (req, res) => {
    res.send("한번 더 라우팅 가능");
});

module.exports = router;