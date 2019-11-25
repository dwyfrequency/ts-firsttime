import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(URL).then(({ data }) => {
  const { id, title, completed } = data as Todo;
  console.log({ id, title, completed });
});
