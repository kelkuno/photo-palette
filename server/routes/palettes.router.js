const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('req.user', req.user);
  const queryText = `SELECT * FROM "palette"
  WHERE "palette".user_id = $1;`

  let value = [req.user.id]

  pool.query(queryText, value)
    .then( result=> {
        console.log('this is what the get sends', result.rows);
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log('req.user in post', req.user);
  console.log('req.body in post', req.body);
  const queryText =`INSERT INTO "palette" ("img_url", "user_id", "palette_name", "hex0", "hex1", "hex2", "hex3", "hex4", "hex5", "quantity0", "quantity1", "quantity2", "quantity3", "quantity4", "quantity5")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`;

  const queryValues = [req.body.newPalette.img_url, req.user.id, 
  req.body.newPalette.palette_name, req.body.newPalette.hex0, req.body.newPalette.hex1,
  req.body.newPalette.hex2, req.body.newPalette.hex3, req.body.newPalette.hex4,
  req.body.newPalette.hex5, req.body.newPalette.quantity0, req.body.newPalette.quantity1,
  req.body.newPalette.quantity2, req.body.newPalette.quantity3, req.body.newPalette.quantity4,
  req.body.newPalette.quantity5]

  pool.query(queryText, queryValues)
  .then(result => {
    res.sendStatus(201);
  }).catch(err => {
    res.sendStatus(500);
  })
});

module.exports = router;
