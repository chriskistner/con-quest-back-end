import models from '../models/characters';

const getAllCharacters = (req, res, next) => {
    models.getAllCharacters()
      .then(characters => {
          if (!characters) {
            next({ status: 400, error: 'Unable to retrieve characters' });           
          } else {
            res.status(200).send(characters);
          }
      })
      .catch(next);
  };

  const getCharacter = (req, res, next) => {
      const characterId = req.params.character_id;

    models.getcharacter(characterId)
      .then(character => {
          if (!character) {
            next({ status: 400, error: 'Unable to retrieve character' });              
          } else {
            res.status(200).send(character);
          }
      })
      .catch(next);
  };

  const createCharacter = (req, res, next) => {
    const newCharacter = req.body;

    models.createCharacter(newCharacter)
      .then(id => {
        if (!id) {
          next({ status: 400, error: 'Character creation failed.' });
  
        } else {
          res.status(201).send(id);
        }
      })
      .catch(next);
  };

  const deleteCharacter = (req, res, next) => {
    const characterId = req.params.character_id;

    models.deleteCharacter(characterId)
      .then(id => {
        if (!id) {
          next({ status: 400, error: 'Unable to delete card' });
  
        } else {
          res.status(201).send(id);
        }
      })
      .catch(next);
  };

  const updateCharacter = (req, res, next) => {
    const characterId = req.params.character_id;
    const updatedCharacter = req.body;

    models.updateCharacter(characterId, updatedCharacter)
      .then(id => {
        if (!id) {
          next({ status: 400, error: 'Unable to update character' });
  
        } else {
          res.status(201).send(id);
        }
      })
      .catch(next);
  };

  const getCharacterCards = (req, res, next) => {
    const characterId = req.params.character_id;

    models.getCharacterCards(characterId)
      .then(cards => {
        if (!cards) {
          next({ status: 400, error: 'Unable to retrieve character cards' });
  
        } else {
          res.status(201).send(cards);
        }
      })
      .catch(next);
  };

  const getCharacterObjectives = (req, res, next) => {
    const characterId = req.params.character_id;

    models.getCharacterObjectives(characterId)
      .then(objectives => {
        if (!objectives) {
          next({ status: 400, error: 'Unable to retrieve character objectives' });
  
        } else {
          res.status(201).send(objectives);
        }
      })
      .catch(next);
  };



  module.exports = { getAllCharacters,
                    getCharacter,
                    createCharacter,
                    deleteCharacter,
                    updateCharacter,
                    getCharacterCards,
                    getCharacterObjectives
                    };