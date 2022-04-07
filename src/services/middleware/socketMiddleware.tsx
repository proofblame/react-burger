import { Middleware, MiddlewareAPI } from "redux";
import { AppDispatch, RootState, TWsActionTypes } from "../types";

export const socketMiddleware = (wsActions: any): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action) => {
      const { dispatch } = store;
      const { wsConnect, wsDisconnect, onOpen, onClose, onError, onMessage } = wsActions;

      if (wsConnect.match(action)) {
        socket = new WebSocket(action.payload);
      }


      if (wsDisconnect.match(action) && socket) {
        socket.close();
      }

      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch(onOpen());
          console.log("Соединение установлено");
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          dispatch(onMessage(JSON.parse(data)));
          console.log(`Получены данные: ${event.data}`)
        };

        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch(onClose());
          if (event.wasClean) {
            console.log('Соединение закрыто корректно');
            console.log(`Код закрытия - ${event.code}`);
            console.log(`Причина закрытия - ${event.reason}`)
          } else {
            console.log('Соединение закрыто с кодом - ')
          }
        }


        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event: Event) => {
          dispatch(onError());
          console.log(`Ошибка ${event}`);
        };

      }



      next(action);
    };
  });
};