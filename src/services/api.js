import axios from "axios";

const host = "192.168.1.64"

const citiesURL = `http://${host}:3000/api/cities`;

export const getCities = async () => {
  const response = await axios.get(citiesURL);
  return response.data;
};

export const getRoutesByCity = async ({queryKey}) => {
  const [_key, cityId] = queryKey
  const routesByCityIdURL = `http://${host}:3000/api/routes?where[city][equals]=${cityId}`;
  const response = await axios.get(routesByCityIdURL);
  return response.data;
};
