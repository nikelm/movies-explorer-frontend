export const BASE_URL = 'http://localhost:3003';

export const register = (name, password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({name, password, email })
  })
  .then((res) => res.json())
  .then((data) => {
    return data;
  })
  .catch((err) => console.log(err));
};


export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    
    if (data.token) {
      localStorage.setItem('token', data.token);
      return data;
    } else {
      return data;
    }
  })
  .catch((err) => console.log(err));
}


export const saveMovie = (
  owner, country, director, duration,
  movieId, year, description, image,
  trailer, nameRU, nameEN, thumbnail
) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      owner, country, director, duration,
      movieId, year, description, image,
      trailer, nameRU, nameEN, thumbnail
    })
  })
  .then((res) => res.json())
  .then((data) => {
    return data;
  })
  .catch((err) => console.log(err));
}



export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
  .then((res) => res.json())
  .then((data) => data)
  .catch((err) => console.log(err));
}


