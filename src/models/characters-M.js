import db from '../../db';

const getAllCharacters = () => {
    return db('characters')
    .select('*')
    .then(data => {
        if (!data) {
            throw { status: 400, error: 'Could not retrieve characters from db.' }
        } else {
            return data
        }
    });
  };

  const getCharacter = (characterId) => {
      return db('characters')
      .first()
      .where({id: characterId})
      .then(data => {
        if (!data) {
            throw { status: 400, error: 'That character could not be found.' }
        } else {
            return data
        }
      });
  };

  const createCharacter = (newCharacter) => {
    return db('characters')
    .insert(newCharacter)
    .returning("*")
    .then(data => {
        if (!data) {
            throw { status: 400, error: 'Unable to create character.' }
        } else {
            return data[0].id
        }
    });
  };

  const deleteCharacter = (characterId) => {
      return db('characters')
      .where({id: characterId})
      .del()
      .returning("*")
      .then(data => {
          if (!data) {
              throw { status: 400, error: 'Unable to delete character.' }
          } else {
              return data[0].id
          }
      });
  }

  const updateCharacter = (characterId, updatedCharacter) => {
      const { name, description, color} = updatedCharacter;
      return db('characters')
      .where({id: characterId})
      .update({name, description, color })
      .then(data => {
        if (!data) {
            throw { status: 400, error: 'Unable to update character.' }
        } else {
            return data
        }
      });
  };

  module.exports = { getAllCharacters, 
    getCharacter, 
    createCharacter, 
    deleteCharacter,
    updateCharacter};