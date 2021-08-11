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


  module.exports = { getAllCharacters, getCharacter, createCharacter}