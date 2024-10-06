import { createStore } from "redux";
import lessonReducer from "./reducers";

const store = createStore(lessonReducer);

export default store; // Экспортируем хранилище
