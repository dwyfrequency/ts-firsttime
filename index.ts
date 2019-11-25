import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const logData = (id: number, title: string, completed: boolean) =>
  console.log(id, title, completed);

axios.get(URL).then(({ data }) => {
  const { id, title, completed } = data as Todo;
  logData(id, title, completed);
});
