import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Contact from "./components/Contact";
import ReactDOM from 'react-dom/client';



const App = () => {
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  );
};

const  appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/Contact",
    element:<Contact />
  },
]);

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
//root.render(<RouterProvider router={appRouter}/>)
//export default App;