export const fetchData = async (auth) => {
  const response = await fetch("https://devtest.a2g.io/api/Auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(auth),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);

  console.log(response);

  return data;
};

export const fetchPlatform = async (token) => {
  const response = await fetch("https://devtest.a2g.io/api/Platforms", {
    headers: { Authorization: "Bearer " + token },
  });
  const platformList = await response.json();

  return platformList;
};

export const fetchPlatformById = async (token, id) => {
  const response = await fetch(`https://devtest.a2g.io/api/Platforms/${id}`, {
    headers: { Authorization: "Bearer " + token },
  });
  const platformList = await response.json();

  return platformList;
};

export const fetchRecords = async (token, id) => {
  const response = await fetch(`https://devtest.a2g.io/api/Records/${id}`, {
    headers: { Authorization: "Bearer " + token },
  });
  const recordsList = await response.json();

  return recordsList;
};
