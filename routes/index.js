var express = require('express');
var router = express.Router();

const adminController=require('../controllers/adminController');


/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Trang chủ'
  });
});

router.post('/logout',adminController.logout);

module.exports = router;
