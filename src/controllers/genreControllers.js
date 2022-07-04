import { Genre } from "../models/Genre.js";

export const getGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    return res.status(200).json(genres);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getGenreById = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await Genre.findAll({
      where: {
        id,
      },
    });
    return res.status(200).json(genre);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postGenre = async (req, res) => {
  try {
    const { name, image, movieId } = req.body;
    const genreCreated = await Genre.create({
      name,
      image,
      movieId,
    });
    return res.status(200).json(genreCreated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, movieId } = req.body;
    const genre = await Genre.findByPk(id);
    (name.genre = name), (image.genre = image), (movieId.genre = movieId);
    await Genre.save();
    return res.status(200).json(genre);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteGenre = async (req, res) => {
  try {
    const { id } = req.params;
    const genre = await Genre.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json(genre);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const filterGenre = async (req, res) => {
  try {
    const { filtro } = req.params;
    const genre = await Genre.findAll({
      where: {
        name: filtro,
      },
    });
    return res.status(200).json(genre);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
