import models from '../models/cards';

const getAll = (req, res, next) => {
    const userId = req.params.user_id
    const deckId = req.params.deck_id
  
    models.getAll(userId, deckId)
      .then(cards => {
        res.send(cards)
      })
      .catch(next)
  }
  