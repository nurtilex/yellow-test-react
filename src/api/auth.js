import axios from 'axios';

export const authUser = async () => {
  const url = `https://jogtracker.herokuapp.com/api/v1/auth/user`;
  const headers = {
    Authorization:
      'Bearer eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf',
  };

  const { data } = await axios.get(url, { headers });
  return data.response;
};
