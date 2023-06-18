var express = require('express');


function createRouter(db) {
  const router = express.Router();

  router.get('/users', function (req, res, next) {
    res.setHeader('Content-Type','application/json');

    db.query(
      'SELECT * FROM books',
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error', message: error.message});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.post('/users', (req, res, next) => {

    db.query('CREATE TABLE IF NOT EXISTS CRUD.books ( id int(10) NOT NULL, title varchar(30) NOT NULL DEFAULT "", PRIMARY KEY (id));');
    db.query(
      'INSERT INTO books (id, title) VALUES (?,?)',
      [req.body.id, req.body.title],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });
  
  return router;
}

module.exports = createRouter;
