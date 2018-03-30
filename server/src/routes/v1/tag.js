import express from "express";
const router = express.Router();

const qry = `
  SELECT *
  FROM tag`;

router.get("/all", (req, res, next) => {
  res.locals.connection.query(qry,
    (error, results, fields) => {
    res.setHeader("Content-Type", "application/json");
    if (error){
      res.send(JSON.stringify({"status": 500, "error": error, "response": null}, null, 2));
      throw error;
    } else {
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}, null, 2));
    }
  });
});

router.get("/:id", (req, res, next) => {
  res.locals.connection.query(qry + ` WHERE id = ?`, [req.params.id],
    (error, results, fields) => {
      res.setHeader("Content-Type", "application/json");
      if (error){
        res.send(JSON.stringify({"status": 500, "error": error, "response": null}, null, 2));
        throw error;
      } else {
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}, null, 2));
      }
    });
});


router.get("/category/:category", (req, res, next) => {
  res.locals.connection.query(qry + ` WHERE category = ?`, [req.params.category],
    (error, results, fields) => {
      res.setHeader("Content-Type", "application/json");
      if (error){
        res.send(JSON.stringify({"status": 500, "error": error, "response": null}, null, 2));
        throw error;
      } else {
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}, null, 2));
      }
    });
});

module.exports = router;
