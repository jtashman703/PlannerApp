import axios from 'axios';

export default {
    signUp: function(userData) {
        return axios.post('/auth/signup', userData);
      }
}