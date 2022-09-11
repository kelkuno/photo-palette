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

  const queryValues = [req.body.stagedPalette.img_url, req.user.id, 
  req.body.stagedPalette.palette_name, req.body.stagedPalette.hex0, req.body.stagedPalette.hex1,
  req.body.stagedPalette.hex2, req.body.stagedPalette.hex3, req.body.stagedPalette.hex4,
  req.body.stagedPalette.hex5, req.body.stagedPalette.quantity0, req.body.stagedPalette.quantity1,
  req.body.stagedPalette.quantity2, req.body.stagedPalette.quantity3, req.body.stagedPalette.quantity4,
  req.body.stagedPalette.quantity5]

  pool.query(queryText, queryValues)
  .then(result => {
    res.sendStatus(201);
  }).catch(err => {
    res.sendStatus(500);
  })
});

/**
 * DELETE route template
 */
router.delete('/:id', (req,res) => {

  const id = req.params.id;

  console.log('this is req.params', req.params.id);
  const queryText = `DELETE FROM "palette"
  WHERE "palette".id = $1;`

  const queryValues = [id];

  pool.query(queryText, queryValues)
  .then(result => {
    res.sendStatus(201);
  }).catch(err => {
    res.sendStatus(500);
  })
})


module.exports = router;
