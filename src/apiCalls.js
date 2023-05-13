export const fetchApi = (id) => {
  const endPoint = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
  if (id) {
    endPoint = endPoint + id
  }
  return fetch(endPoint)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
};