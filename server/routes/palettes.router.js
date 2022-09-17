const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // console.log('req.user', req.user);
  const queryText = `SELECT * FROM "palette"
  WHERE "palette".user_id = $1
  ORDER BY "id";`

  let value = [req.user.id]

  pool.query(queryText, value)
    .then( result=> {
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
  // console.log('req.user in post', req.user);
  // console.log('req.body in post', req.body);
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

  console.log('this is req.params from delete', req.params.id);
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

/**
 * PUT route template
 */
 router.put('/:id', (req,res) => {

  // const id = req.params.id;
  console.log('this is req.params in put route', req.params.id);
  console.log('this is req.body in put route', req.body);
  console.log('this is req.body in put route, color1', req.body.color1);
  console.log('this is req.body in put route, color2', req.body.color2);
  console.log('this is req.body in put route, color3', req.body.color3);
  console.log('this is req.body in put route, color4', req.body.color4);
  console.log('this is req.body in put route, color5', req.body.color5);
  console.log('this is req.body in put route, color6', req.body.color6);


  
  const queryText = `
  UPDATE "palette" 
  SET "hex0" = $1, 
  "hex1" = $2,
  "hex2" = $3,
  "hex3" = $4,
  "hex4" = $5,
  "hex5" = $6
  WHERE "id" = $7`;

  const queryValues = [ 
    req.body.color1,
    req.body.color2,
    req.body.color3,
    req.body.color4,
    req.body.color5,
    req.body.color6,
    req.params.id
  ]

  pool.query(queryText, queryValues)
  .then(result => {
    res.sendStatus(201);
  }).catch(err => {
    res.sendStatus(500);
  })
})


module.exports = router;
