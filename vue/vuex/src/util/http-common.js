import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.214.40:7777/bookcafe',
  headers: {
    'Content-Type': 'application/json', //파일 업로드 있을 경우 이거 안해야됨
  },
});
