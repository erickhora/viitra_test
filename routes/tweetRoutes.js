const express = require('express');

const path = require('path');

const Tweet = require('../models/tweet');

const router = express.Router();

// GET ALL
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname+'../views/index.html'))
    Tweet.findAll({ limit: 10 }).then(tweets => {
        res.status(200).json({
            message: "Tweets recuperados com sucesso",
        });
        console.log("Todos os tweets", JSON.stringify(tweets, null, 4));
    });
});

//POST Tweet
router.post('/', (req, res, next) => {
    const tweet = new Tweet({
        content: req.body.content
    });
    Tweet.create(tweet).then(tweet => {
        res.status(201).json({
            message: "Novo tweet enviado com sucesso" + tweet.id
        });
      });
});

module.exports = router;