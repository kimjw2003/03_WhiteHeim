const router = require('express').Router();
const slangCtrl = require('./slang.ctrl');

router.post('/', slangCtrl.createSlang);
router.get('/history', postCtrl.getHistory);


module.exports = router;