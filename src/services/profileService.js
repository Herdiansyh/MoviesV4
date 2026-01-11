import axios from "axios";

const BASE_URL =
  "https://69634cbc2d146d9f58d31f7c.mockapi.io/api/profile/profile";

export const profileAPI = {
  async getAll() {
    try {
      const { data } = await axios.get(BASE_URL);
      return data;
    } catch (error) {
      console.error("Error fetching profiles:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  async getById(id) {
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      return data;
    } catch (error) {
      console.error("Error fetching profile:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  async register(payload) {
    try {
      const { data } = await axios.post(BASE_URL, payload);
      return data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  async update(id, payload) {
    try {
      const { data } = await axios.put(`${BASE_URL}/${id}`, payload);
      return data;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },

  async remove(id) {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error("Error deleting profile:", error);
      throw new Error(error.response?.data?.message || error.message);
    }
  },
};
