export const fetchApi = (id) => {
 let endPoint = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
  if (id) {
    endPoint = endPoint + "/" + id 
  }
  return fetch(endPoint)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
};