import models from '../models/cards';

const getAllCards = (req, res, next) => {

    models.getAllCards()
      .then(cards => {
        res.send(cards)
      })
      .catch(next);
  };

  const createCard = (req, res, next) => {
    const newCard = req.body;

  
    models.createCard(newCard)
      .then(id => {
        if (!id) {
          next({ status: 400, error: 'Card creation failed.' })
  
        } else {
          res.status(201).send(card)
        }
      })
      .catch(next);
  };

  const deleteCard = (req, res, next) => {
    const cardId = req.params.card_id;

    models.deleteCard(cardId)
      .then(id => {
        if (!id) {
          next({ status: 400, error: 'Unable to delete card' })
  
        } else {
          res.status(201).send(id)
        }
      })
      .catch(next);
  };

  const updateCard = (req, res, next) => {
    const cardId = req.params.card_id;

    models.updateCard(cardId)
      .then(id => {
        if (!id) {
          next({ status: 400, error: 'Unable to update card' })
  
        } else {
          res.status(201).send(id)
        }
      })
      .catch(next);
  };

  const AddCardToCharacter = (req, res, next) => {
    const cardId = req.params.card_id;
    const characterId = req.params.character_id;

    models.AddCardToCharacter (cardId, characterId)
      .then(id => {
        if (!id) {
          next({ status: 400, error: 'Unable to add card to Character Deck' })
  
        } else {
          res.status(201).send(id)
        }
      })
      .catch(next);
  };

  const DropCardFromCharacter = (req, res, next) => {
    const cardId = req.params.card_id;
    const characterId = req.params.character_id;

    models.DropCardFromCharacter (cardId, characterId)
      .then(id => {
        if (!id) {
          next({ status: 400, error: 'Unable to drop card from character deck' })
  
        } else {
          res.status(201).send(id)
        }
      })
      .catch(next);
  };


  module.exports = { getAllCards,
                    createCard,
                    deleteCard,
                    updateCard,
                    AddCardToCharacter,
                    DropCardFromCharacter 
                    };