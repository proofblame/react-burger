const baseURL = 'https://norma.nomoreparties.space/api/ingredients';

// Возвращаем объект ответа
const getResponseData = async (res) => {
  const data = await res.json()
  if (res.ok) {
    return data;
  } else {
    return Promise.reject(new Error(data.message || data.error));
  }
}

// Получить данные о тарифе
const getData = async () => {
  const res = await fetch(baseURL);
  return getResponseData(res);
}

const api = {
  getData,
}
export default api