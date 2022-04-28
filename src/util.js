export function getData(URL) {
    return fetch(URL)
      .then((response) => {
        if (response.status === 201) {
          return response.statusText;
        } else {
          return response.json();
        }
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
