const baseURL = 'https://norma.nomoreparties.space/api';

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
  const res = await fetch(`${baseURL}/ingredients`);
  return getResponseData(res);
}

// Отправить заказ
const sendData = async (ingredients) => {
  const res = await fetch(`${baseURL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ingredients: ingredients
    })
  });
  return getResponseData(res);
}


const api = {
  getData,
  sendData
}
export default api