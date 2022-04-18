import axios from 'axios';
const headers = {
  Authorization:
    'Bearer eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf',
};
const url = 'https://jogtracker.herokuapp.com/api/v1/data/jog';
export const postJog = async (data) => {
  const response = await axios.post(url, data, { headers });

  return response;
};
