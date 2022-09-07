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
  // POST route code here
});

module.exports = router;
