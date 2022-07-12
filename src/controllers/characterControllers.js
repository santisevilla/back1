import { Character } from "../models/Character.js";
import { Movie } from "../models/Movie.js";

export const getCharacters = async (req, res) => {
  try {
    const { name } = req.query;
    const { age } = req.query;
    const characters = await Character.findAll();
    if (name) {
      const characterName = await Character.findAll({
        where: {
          name,
        },
      });
      if (characterName) {
        return res.status(200).json(characterName);
      } else {
        return res.status(404).json("Character not found");
      }
    } else if (age) {
      const characterAge = await Character.findAll({
        where: {
          age,
        },
      });
      if (characterAge) {
        return res.status(200).json(characterAge);
      } else {
        return res.status(404).json("Character not found");
      }
    }
    characters.length > 0
      ? res.status(200).json(characters)
      : res.status(201).json("No hay personajes creados");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCharacterById = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await Character.findOne({
      where: {
        id,
      },
    });
    if (!character) {
      return res.status(404).json({ message: "Character does not exists" });
    }
    res.json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const postCharacter = async (req, res) => {
  const { image, name, age, weight, history } = req.body;
  try {
    if (!image || !name || !age || !weight || !history) {
      return res.status(404).json({ message: "Empty data is not allowed" });
    }
    const characters = await Character.findAll();
    const characterCreated = await Character.create({
      image,
      name,
      age,
      weight,
      history,
    });
    // console.log(characters);
    // const newCharacter1 = {
    //   image,
    //   name,
    //   age,
    //   weight,
    //   history,
    // };
    // console.log(newCharacter1);
    // for (let i = 0; i < characters.length; i++) {
    //   if (newCharacter1 === characters[i]) {
    //     return res.status(404).json("El personaje ya está creado");
    //   } else {
    //     const characterCreated = await Character.create({
    //       image,
    //       name,
    //       age,
    //       weight,
    //       history,
    //     });
    //     return res.status(200).json("Personaje creado");
    //   }
    // }
    return res.status(200).json(characterCreated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCharacter = async (req, res) => {
  const { id } = req.params;
  const { image, name, age, weight, history } = req.body;
  try {
    const characterId = await Character.findByPk(id);
    console.log(characterId);
    const character = {
      image,
      name,
      age,
      weight,
      history,
    };
    if (characterId === character) {
      return res.status(201).json("No se ha cambiado nada");
    } else {
      let character = await Character.update(
        { image, name, age, weight, history },
        {
          where: {
            id,
          },
        }
      );
    }
    return res.status(200).json("Cambios realizados");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await Character.destroy({
      where: {
        id,
      },
    });
    if (!character) {
      return res.status(404).json({ message: "Enter an existing id" });
    } else {
      return res.status(204).json("Eliminado");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const orderByIdCharacter = async (req, res, next) => {
  const { ordenamiento } = req.params;
  try {
    const characterOrder = await Character.findAll({
      order: [["id", ordenamiento]],
    });
    if (characterOrder) {
      return res.status(200).json(characterOrder);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const orderByNameCharacter = async (req, res, next) => {
  const { ordenamiento } = req.params;
  try {
    const characterOrder = await Character.findAll({
      order: [["name", ordenamiento]],
    });
    if (characterOrder) {
      return res.status(200).json(characterOrder);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const orderByAgeCharacter = async (req, res, next) => {
  const { ordenamiento } = req.params;
  try {
    const characterOrder = await Character.findAll({
      order: [["age", ordenamiento]],
    });
    if (characterOrder) {
      return res.status(200).json(characterOrder);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const orderByWeightCharacter = async (req, res, next) => {
  const { ordenamiento } = req.params;
  try {
    const characterOrder = await Character.findAll({
      order: [["weight", ordenamiento]],
    });
    if (characterOrder) {
      return res.status(200).json(characterOrder);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMoviesCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const moviesCharacter = await Movie.findAll({
      where: {
        characterId: id,
      },
    });
    return res.status(200).json(moviesCharacter);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
