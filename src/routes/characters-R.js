const router = require('express').Router({ mergeParams: true });
const characterCon = require('../controllers/characters');

router.get('/:character_id', characterCon.getCharacter);
router.get('/', characterCon.getCharacters);
router.post('/', characterCon.createCharacter);
router.delete('/:character_id', characterCon.removeCharacter);
router.put('/:character_id', characterCon.updateCharacter);

router.get('/:character_id/cards', characterCon.getCharacterCards);
router.get('/:character_id/objectives', characterCon.getCharacterObjectives);

module.exports = router