const router = require('express').Router({ mergeParams: true });
const cardCon = require('../controllers/cards');

router.get('/', cardCon.getAllCards);
router.post('/', cardCon.createCard);
router.delete('/', cardCon.DeleteCard);
router.put('/', cardCon.UpdateCard);

router.post('/character/:character_id/card/:card_id', cardCon.AddCardToCharacter);
router.delete('/character/:character_id/card/:card_id', cardCon.DropCardFromCharacter);

module.exports = router