export const BASE_URL = 'http://localhost:3000';


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


export const saveMovie = (data) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(data)
  })
  .then((res) => res.json())
  .then((data) => {
    return data;
  })
  .catch((err) => console.log(err));
}

export const getMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
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

export const deleteMyMovies = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${localStorage.getItem('token')}`
    }
  }).then((res) => res.json())
  .then((data) => data)
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

export const updateContent = (userData) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      name: userData.name,
      email: userData.email
    })
  }).then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}

