import axios from 'axios';
import {
  API_KEY,
  BASE_URL,
  JSON_HEADER,
} from '../../service/shared/api-constant';

export const API = axios.create({
  baseURL: '/api',
  headers: {
    Authorization: process.env.REACT_APP_NEXON_KEY!,
  },
});

export const MATCH_TYPE = {
  '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a': '개인전',
  effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e: '팀전',
};

// export const getUserNicknameData = (nickname: string) => {
//   axios
//     .get(`/apiusers/nickname/${nickname}`, {
//       headers: {
//         Authorization: API_KEY,
//         ...JSON_HEADER,
//       },
//     })
//     .then((res) => res.data)
//     // .then((data) => {
//     //   localStorage.setItem('Nickname', JSON.stringify(data));
//     // })
//     .catch((error) => error);
// };
