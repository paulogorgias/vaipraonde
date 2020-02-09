var express = require('express');
var router = express.Router();

const {Sector}  = require('../models/');
const withAuth = require('../../middlewares/auth');


router.post('/', withAuth, async (req, res) => {
  const { sectorName } = req.body;

  const sector = await Sector.create({sectorName: sectorName})
    .then( sector => 
      res.status(200).json(sector)
    )
    .catch(error => res.status(500).send(error));

});

module.exports = router;
