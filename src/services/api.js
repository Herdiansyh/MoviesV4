import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const filmAPI = {
  // Fetch semua data
  async getAllData() {
    try {
      const { data } = await axios.get(BASE_URL);
      return data;
    } catch (error) {
      console.error("Error fetching all data:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  // Fetch data hero
  async getHeroData() {
    try {
      const { data } = await axios.get(BASE_URL);
      return data.filter((item) => item.kategori === "dataHero");
    } catch (error) {
      console.error("Error fetching hero data:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  // Fetch data movies
  async getMovies() {
    try {
      const { data } = await axios.get(BASE_URL);
      return data.filter((item) => item.kategori === "dataMovies");
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  // Fetch top movies
  async getTopMovies() {
    try {
      const { data } = await axios.get(BASE_URL);
      return data.filter((item) => item.kategori === "topMovies");
    } catch (error) {
      console.error("Error fetching top movies:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  // Fetch new releases
  async getNewReleases() {
    try {
      const { data } = await axios.get(BASE_URL);
      return data.filter((item) => item.kategori === "newReleaseMovies");
    } catch (error) {
      console.error("Error fetching new releases:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  // Fetch trending movies
  async getTrendingMovies() {
    try {
      const { data } = await axios.get(BASE_URL);
      return data.filter((item) => item.kategori === "trendingMovies");
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },
  // Fetch trending movies
  async getVertikalMovies() {
    try {
      const { data } = await axios.get(BASE_URL);
      return data.filter((item) => item.kategori === "imgVertikal");
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  // Fetch movie by ID
  async getMovieById(id) {
    try {
      const { data } = await axios.get(BASE_URL);
      return data.find((movie) => movie.id === parseInt(id));
    } catch (error) {
      console.error("Error fetching movie by ID:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },
};
