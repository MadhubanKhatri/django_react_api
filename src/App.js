import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Edit from './Components/Edit';
import FileUpload from './Components/FileUpload';
import Root from './Components/Root';

function App() {
  const url = "http://127.0.0.1:8000/"

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Home url={url}/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path="/edit/:id/"  element={<Edit url={url}/>}/>
      <Route path="/file_upload/"  element={<FileUpload url={url}/>}/>
    </Route>
  ))
  
  return (
    <div>
        <RouterProvider router={router}/>       
    </div>
  );
}

export default App;
