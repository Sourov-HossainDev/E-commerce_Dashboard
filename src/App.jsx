import { Button } from 'antd';
import Home from './Components/Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>
      <Route
        path="/"
        element={<Home />}
      >
      </Route>
      <Route
        path="/login"
        element={<Home />}
      >
      </Route>
    </Route>


  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
