import Todo from "./components/Todo";

function App(props) {
  return (
    <div>
      <h1>My Todo's</h1>
      <Todo text='Learn React' />
      <Todo text='Master React'/>
      <Todo text='Explore Full React Course' />
    </div>
  );
}

export default App;
