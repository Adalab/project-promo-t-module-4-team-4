const callToApi = (data) => {
  return fetch('https://dev.adalab.es/api/projectCard', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((dataAPI) => {
      return dataAPI;
    });
};

const getApiProjects = async () => {
  const response = await fetch('http://localhost:4000/api/projects');
  const dataJson = await response.json();
  return dataJson;
};

const objectApi = {
  callToApi: callToApi,
  getApiProjects: getApiProjects,
};

export default objectApi;
