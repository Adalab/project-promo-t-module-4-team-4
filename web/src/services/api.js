const callToApi = (data) => {
  return fetch('http://localhost:4000/api/projects/add', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((dataAPI) => {
      return dataAPI;
    });
};

const getApiProjects = async (params) => {
  const response = await fetch(`http://localhost:4000/api/projects?page=${params}`);
  const dataJson = await response.json();
  console.log(dataJson);
  console.log(params);
  return dataJson;
};

const objectApi = {
  callToApi: callToApi,
  getApiProjects: getApiProjects,
};

export default objectApi;
