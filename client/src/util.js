import axios from 'axios';

//==============================
//====  Potholes  ==============
//==============================

export function getPotholes() {
    return axios.get('/potholes');
  }