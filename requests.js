const baseUrl = 'https://newsapi.org/v2';
const API_KEY = '0f86a8396d314fad875b0f7efc6b8190';

const requests = {
  all: `${baseUrl}/top-headlines?country=ng&apiKey=${API_KEY}`,
}

export default requests;