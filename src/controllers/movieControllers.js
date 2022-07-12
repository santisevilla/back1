import { Movie } from "../models/Movie.js";
import { Genre } from "../models/Genre.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    movies.length > 0
      ? res.status(200).json(movies)
      : res.status(201).json("No hay películas creadas");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findOne({
      where: {
        id,
      },
    });
    if (!id) {
      return res.status(200).json("Movie does not exists");
    }
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postMovie = async (req, res) => {
  try {
    const { image, title, date, rating, characterId } = req.body;
    if (!image || !title || !date || !rating || !characterId) {
      return res.status(200).json("Empty data is not allowed");
    } else if (rating > 5) {
      return res.status(404).json("Rating: Must be between 1 and 5");
    } else if (!characterId) {
      return res.status(404).json("Id inexistente");
    }
    const newMovie = await Movie.create({
      image,
      title,
      date,
      rating,
      characterId,
    });
    return res.status(200).json(newMovie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { image, title, date, rating } = req.body;
  try {
    const movie = await Movie.findByPk(id);
    console.log(movie);
    const movieUpdate = await Movie.update(
      { image, title, date, rating },
      {
        where: {
          id,
        },
      }
    );
    if (movieUpdate === movie) {
      return res.status(404).json("No se han realizado cambios");
    } else {
      return res.status(200).json("Cambios realizados");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const movieDelete = await Movie.destroy({
        where: {
          id,
        },
      });
      return res.status(200).json("Movie deleted");
    } else {
      return res.status(404).json("Id not existing");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const orderByTitleMovie = async (req, res) => {
  try {
    const { ordenamiento } = req.params;
    const movieOrder = await Movie.findAll({
      order: [["title", ordenamiento]],
    });
    if (movieOrder) {
      return res.status(200).json(movieOrder);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const orderByDateMovie = async (req, res) => {
  try {
    const { ordenamiento } = req.params;
    const movieOrder = await Movie.findAll({
      order: [["date", ordenamiento]],
    });
    if (movieOrder) {
      return res.status(200).json(movieOrder);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const orderByRatingMovie = async (req, res) => {
  try {
    const { ordenamiento } = req.params;
    const movieOrder = await Movie.findAll({
      order: [["rating", ordenamiento]],
    });
    if (movieOrder) {
      return res.status(200).json(movieOrder);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getGenresMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const genresMovies = await Genre.findAll({
      where: {
        movieId: id,
      },
    });
    return res.status(200).json(genresMovies);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
