import ResponsiveDrawer from "./pages/Dashboard";
import { BrowserRouter } from "react-router-dom";
import  PieChart  from "./pages/PieChart";
import { Geo } from "./pages/Geo";
import Delete from "./methods/Delete";
import Postadd from './methods/Postadd'
function App() {
  return (
   <>
   <BrowserRouter>
<ResponsiveDrawer/>
 <PieChart/> 
 <Geo/>
</BrowserRouter>
{/* <Delete/>
<Postadd/> */}
   </>
  );
}

export default App;
