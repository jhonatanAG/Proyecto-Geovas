import {Route,Routes} from "react-router-dom";
import StockPage from "./pages/StockPage";
import StockForm  from "./pages/StockForm";
import NotFound   from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<StockPage/>}  />
          <Route path="/new" element={<StockForm/>}  />  
          <Route path="/getStock" element={<StockPage/>}  />  
          <Route path="*" element={<NotFound/>}  />  
        </Routes>
    
    </>
  );
}

export default App



