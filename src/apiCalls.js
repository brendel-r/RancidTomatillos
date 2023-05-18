export const fetchApi = (id) => {
 let endPoint = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
  if (id) {
    endPoint = endPoint + "/" + id 
  }
  return fetch(endPoint)
    .then((response) => {
      if (!response.ok) {
        console.log(response.status, 'type', typeof response.status)
        throw new Error(response.status)
      }
      return response.json();
    })
};