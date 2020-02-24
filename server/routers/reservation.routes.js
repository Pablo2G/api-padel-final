const express = require('express');
const router = express.Router();
const reservationCtrl = require('../controllers/reservation.controllers');
const md_auth = require('../middleware/authenticated');

router.get('/', md_auth.ensureAuth, reservationCtrl.getReservations);
router.post('/', md_auth.ensureAuth, reservationCtrl.createReservations);
router.get('/:id',  reservationCtrl.getReservation);
router.put('/:id', md_auth.ensureAuth, reservationCtrl.editReservations);
router.delete('/:id', md_auth.ensureAuth, reservationCtrl.deleteReservations);

module.exports = router;