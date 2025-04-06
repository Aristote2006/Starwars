import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

export const getCharacters = async (page = 1, search = "") => {
  const response = await axios.get(`${BASE_URL}people/?page=${page}&search=${search}`);
  return response.data;
};

export const getCharacterDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}people/${id}/`);
  return response.data;
};

export const getPlanets = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}planets/?page=${page}`);
  return response.data;
};

export const getStarships = async (page = 1) => {
  const response = await axios.get(`${BASE_URL}starships/?page=${page}`);
  return response.data;
};

export const getResource = async (url) => {
  const response = await axios.get(url);
  return response.data;
};