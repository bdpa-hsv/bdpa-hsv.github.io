import React from 'react';
import NavBar from './components/NavBar'
import LessonList from './components/LessonList'

import './App.css';

function App() {
  return (
    <React.Fragment>
      <div>
        <NavBar></NavBar>

      </div>
      <div>
        <LessonList>

        </LessonList>
      </div>
    </React.Fragment>
  );
}

export default App;
