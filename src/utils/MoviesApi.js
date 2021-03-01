class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    })
  }
}

const apiMovies = new MoviesApi({
  url: 'https://api.nomoreparties.co',
  headers: {
    'content-type': 'application/json'
  }
});

export default apiMovies;

