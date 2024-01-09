import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/home/Home";
import NavBar from "./components/navbar/NavBar";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
