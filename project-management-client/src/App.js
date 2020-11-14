import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// import AddProject from './components/projects/AddProject';
import ProjectList from './components/projects/ProjectList';
import Navbar from './components/navbar/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import TaskDetails from './components/tasks/TaskDetails';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* // renderizaremos nuestro componente 'Navbar' */}
        <Navbar />
        {/* // utilizaremos al componente 'Switch' y dentro de él dos componentes 'Route' a los cuales les pasaremos paths específicos: */}
        <Switch>
          {/* // 1) uno irá a la ruta del back que muestra todos los projects (path), y utilizará al componente correspondiente a ello (component) */}
          <Route exact path="/projects" component={ProjectList} />
          {/* // 2) el otro irá a la ruta que muestra el detalle de un project puntual (path), y utilizará el componente correspondiente a ello (component) */}
          <Route exact path="/projects/:id" component={ProjectDetails} />
          {/* added to display task details page: */}
          <Route exact path="/tasks/:taskId" component={TaskDetails} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
