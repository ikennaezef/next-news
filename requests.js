const baseUrl = 'https://newsapi.org/v2';
const API_KEY = '0f86a8396d314fad875b0f7efc6b8190';

const requests = {
  all: `${baseUrl}/top-headlines?country=ng&apiKey=${API_KEY}`,
  sports: `${baseUrl}/top-headlines?category=sports&language=en&apiKey=${API_KEY}`,
  entertainment: `${baseUrl}/top-headlines?category=entertainment&language=en&apiKey=${API_KEY}`,
  technology: `${baseUrl}/top-headlines?category=technology&language=en&apiKey=${API_KEY}`,
}

export default requests;