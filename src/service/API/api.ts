import axios from 'axios';
import {
  API_KEY,
  BASE_URL,
  JSON_HEADER,
} from '../../service/shared/api-constant';

export const getUserNicknameData = (nickname: string) => {
  axios
    .get(BASE_URL + `users/nickname/${nickname}`, {
      headers: {
        Authorization: API_KEY,
        ...JSON_HEADER,
      },
    })
    .then((res) => res.data)
    .then((data) => {
      const res = localStorage.setItem('Nickname', JSON.stringify(data));
      return res;
    })
    .catch((error) => error);
};
