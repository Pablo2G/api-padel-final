const express = require('express');
const router = express.Router();
const courtCtrl = require('../controllers/court.controllers');
const md_auth = require('../middleware/authenticated');

router.get('/', md_auth.ensureAuth, courtCtrl.getCourts);
router.post('/', md_auth.ensureAuth, courtCtrl.createCourts);
router.get('/:id', md_auth.ensureAuth, courtCtrl.getCourt);
router.put('/:id', md_auth.ensureAuth, courtCtrl.editCourts);
router.delete('/:id', md_auth.ensureAuth, courtCtrl.deleteCourts);

module.exports = router;