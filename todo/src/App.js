import React from 'react';
import Title from './components/Title.js';
import ToDoList from './components/ToDoList.js';

let content = [
    {id:1,text:'Посадить дерево',complited:false},
    {id:2,text:'Построить дом',complited:false},
    {id:3,text:'Вырастить сына',complited:false},
]

function App() {
  return (
    <div className="wrapper">
        <Title text={'ToDoList'} />
        <ToDoList todos={content} />
    </div>
  );
}

export default App;
