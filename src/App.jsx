import './App.css';
import IncDecRes from './components/IncDecRes';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import Axiosfetch from './components/Axiosfetch';
import UseformYep from './components/UseformYep';
import Header from './components/Header';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Redux from './components/Redux';
import UseReducer from './components/UseReducer';
import UseEffect from './components/UseEffect';
import Useref from './components/Useref';
import Footer from './components/Footer';
import TextButton from './components/TextButton';
import ReactQueryTanstack from './components/ReactQueryTanstack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Profile from './components/pages/Profile';
import Home from './components/pages/Home';
import { createContext, useState } from 'react';
import NotFound from './components/pages/NotFound';



 export const AppContext=createContext();


function App() {

  const client =  new QueryClient()

  const[user,setUser] =useState('Sam William')

  return (
    <div className="App">
      <AppContext.Provider value={{user,setUser}}>
      <QueryClientProvider client={client}>
      <Router>
      <Container>
      <Header/>
      </Container>
     
        <Routes>
        <Route path='/' element={<Home/>} />
          <Route path='/about'element={<About/>} />
          <Route path='/profile/:username'element={<Profile/>} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFound></NotFound>}/>
        </Routes>
        <Container>
      <IncDecRes/>
      </Container>
      <Container>
      <Todo/>
      </Container>
      <Container>
      <Axiosfetch/>
      </Container>
      <Container>
      <UseformYep/>
      </Container>
      <Container>
      <UseReducer/>
      </Container>
      <Container>
      <Redux/>
      </Container>
      <Container>
      <UseEffect/>
      </Container>
      <Container>
      <Useref/>
      </Container>
      <Container>
      <Footer/>
      </Container>
      <Container>
      <TextButton/>
      </Container>
      <Container>
      <ReactQueryTanstack/>
      </Container>
      </Router>
      </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}



export default App;



// import './App.css';

// function App() {

// const[addTask,setTask]=useState('')
// const[todoTask,setTodotask]=useState([])

// const addTasks=()=>{
//   const task ={
//     id:todoTask.length === 0 ? 1 : todoTask[todoTask.length-1].id+1,
//     tasked: addTask
//   }
//      setTodotask([...todoTask,task])
     
// }

// const deleteTask=(id)=>{
    
//     setTodotask(todoTask.filter((task)=>(
//       task.id !== id 
// )))
// }
//   return (
//     <div className="App">
//       <div>
//         <input type="text" onChange={(e)=>setTask(e.target.value)} />
//         <button onClick={addTasks}>Add Task</button>
//       </div>
//       <div>
      
//           {todoTask.map((task,index)=>(
//             <div  key={index}>
//              <span>{task.tasked}</span>  
//             <button onClick={()=>deleteTask(task.id)}>X</button>
//             </div>
//           ))}
      
//       </div>
//     </div>
//   );
// }



// export default App;
