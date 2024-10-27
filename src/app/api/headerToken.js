

const store = JSON.parse(localStorage.getItem("persist:auth"));

export const config = {
    headers: {
      Authorization: `Bearer ${store?.token}`,
    },
  };