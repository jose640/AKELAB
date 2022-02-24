import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Principal from "./components/Principal";
import SerieFibonacci from "./components/SerieFibonacci";
import Akelab from "./components/Akelab";
import PeliculasAkelab from "./components/PeliculasAkelab";


// Redux
import { Provider } from 'react-redux';
import store from "./Store";

function App() {
  return (
    <Router>
       <Provider store={store}>
           <Routes>
              <Route path="/" element={<Principal />} /> 
              <Route path="/serie_fibonacci" element={<SerieFibonacci />} /> 
              <Route path="/ake-lab" element={<Akelab />} /> 
              <Route path="/peliculas_akelab" element={<PeliculasAkelab />} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
           </Routes>
       </Provider>
 </Router>
  );
}

export default App;
