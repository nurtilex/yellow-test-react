import axios from 'axios';

export const authUser = async () => {
  const url = `https://jogtracker.herokuapp.com/api/v1/auth/user`;

  const { data } = await axios.get(url, {
    headers: {
      Authorization:
        'Bearer eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf',
    },
  });
  return data.response;
};

export const getJogsById = async (id) => {
  const url = 'https://jogtracker.herokuapp.com/api/v1/data/sync';

  const {
    data: { response },
  } = await axios.get(url, {
    headers: {
      Authorization:
        'Bearer eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf',
    },
  });
  const result = response?.jogs.filter((jog) => jog.user_id === id + '');
  return result;
};
