import axios from 'axios';

const API_URL = 'http://localhost:3000/user';

class DataService {
  getUserData(userId) {
    return axios.get(`${API_URL}/${userId}`);
  }

  getUserActivity(userId) {
    return axios.get(`${API_URL}/${userId}/activity`);
  }

  getUserAverageSessions(userId) {
    return axios.get(`${API_URL}/${userId}/average-sessions`);
  }

  getUserPerformance(userId) {
    return axios.get(`${API_URL}/${userId}/performance`);
  }

  postData(data) {
    return axios.post(API_URL, data);
  }
}

export default new DataService();