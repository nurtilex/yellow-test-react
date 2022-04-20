import axios from 'axios';
const headers = {
  Authorization:
    'Bearer eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf',
};
export const getJogsById = async (id) => {
  const url = 'https://jogtracker.herokuapp.com/api/v1/data/sync';

  const { data } = await axios.get(url, { headers });
  const result = data.response?.jogs.filter((jog) => jog.user_id === id + '');
  return result;
};
export const postJog = async (data) => {
  const url = 'https://jogtracker.herokuapp.com/api/v1/data/jog';
  const response = await axios.post(url, data, { headers });

  return response;
};
