const router = require('express').Router({ mergeParams: true });
const objCon = require('../controllers/objectives');

router.get('/', objCon.getAllObjectives);
router.post('/', objCon.createObjective);
router.delete('/', objCon.DeleteObjective);
router.put('/', objCon.UpdateObjective);

router.post('/character/:character_id/objective/:objective_id', 
    objCon.AddObjectiveToCharacter);
router.delete('/character/:character_id/objective/:objective_id', 
    objCon.DropObjectiveFromCharacter);

module.exports = router