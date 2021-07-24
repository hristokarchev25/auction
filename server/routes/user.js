const router = require('express').Router();
const { User } = require('../models/User');

const { auth } = require('../middleware/auth');

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        name: req.user.name,
        email: req.user.email,
        lastName: req.user.lastName,
        _id: req.user._id,
        isAuth: true,
    });
});

router.post("/register", (req, res) => {
    const user = new User(req.body);
  
    user.save((err, data) => {
      if (err) {
        return res.json({
          success: false,
          err,
        });
      }
  
      return res.status(200).json({
        success: true,
      });
    });
  });

module.exports = router;