import models from '../models/objectives';

const getAllObjectives = (req, res, next) => {

    models.getAllObjectives()
      .then(objs => {
        if (!objs) {
          next({ status: 400, error: 'Unable to retrieve objectives' });
        }
        res.send(cards)
      })
      .catch(next);
  };

  const createObjective = (req, res, next) => {
    const newObjective = req.body;

    models.createObjective(newCard)
      .then(id => {
        if (!id) {
          next({ status: 400, error: 'Objective creation failed.' })
  
        } else {
          res.status(201).send(card)
        }
      })
      .catch(next);
  };

  const deleteObjective = (req, res, next) => {
    const objId = req.params.objective_id;

    models.deleteCard(objId)
      .then(id => {
        if (!id) {
          next({ status: 400, error: 'Unable to delete objective' })
  
        } else {
          res.status(201).send(id)
        }
      })
      .catch(next);
  };

  const updateObjective = (req, res, next) => {
    const objId = req.params.objective_id;
    const updatedObj = req.body;

    models.updateObjective(objId, updatedObj)
      .then(id => {
        if (!id) {
          next({ status: 400, error: 'Unable to update objective' })
  
        } else {
          res.status(201).send(id)
        }
      })
      .catch(next);
  };

  const getCharacterObjectives = (req, res, next) => {
      const charId = req.params.character_id;

      models.getCharacterObjectives(charId)
      .then(objectives => {
        if (!objectives) {
          next({ status: 400, error: 'Unable to retrieve character objectives' })
  
        } else {
          res.status(201).send(id)
        }
      })
      .catch(next);
  }

  module.exports = { getAllObjectives,
                    createObjective,
                    deleteObjective,
                    updateObjective,
                    getCharacterObjectives };