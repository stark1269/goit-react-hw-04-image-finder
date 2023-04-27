import axios from "axios"

const API_KEY = '34459782-b10817d60787eb29d59e10b91';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchApi = async (name, page) => {
  const params = {
    key: API_KEY,
    q: name,
    page,
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  };
  
  const response = await axios(BASE_URL, { params });
  return response.data
};