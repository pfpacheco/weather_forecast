import express from "express";

const router = express.Router();

router.use((req, res, next) => {
      console.log('Time: ', Date.now());
      next();
});

router.get('/', (req, res) => {
    return res.render("index.html");
});

export default router;