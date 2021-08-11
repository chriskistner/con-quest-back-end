const router = require('express').Router({ mergeParams: true });
const objCon = require('../controllers/objectives');

router.get('/', objCon.getAllObjectives);
router.post('/', objCon.createObjective);
router.delete('/', objCon.DeleteObjective);
router.put('/', objCon.UpdateObjective);

router.get('/character/:character_id', objCon.getCharacterObjectives);

module.exports = router