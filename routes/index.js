const express = require('express');
const router = express.Router();

/* GET home page (index.ejs). */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hacienda SantaCruz' });
});

// GET seccion nosotros (nosotros.ejs)
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'HS' });
});
router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto' });
});
router.get('/pqr', function(req, res, next) {
  res.render('pqr', { title: '     Peticiones, Quejas o reclamos' });
});




module.exports = router;
