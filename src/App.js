import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import BrandStoty from './Pages/BrandStoty';
import NewsPage from './Pages/NewsPage';
import Foods from './Pages/Foods';
import StoresInformation from './Pages/StoresInformation';
import OnlineOrder from './Pages/OnlineOrder';
import OnlineExplain from './Pages/OnlineExplain';
import JoinUs from './Pages/JoinUs';
import LoginMember from './Pages/LoginMember';
import FoodCard from './Pages/FoodCard'
import VIP from './Pages/VIP';
import RiceComponent from './MealCoponent/RiceComponent';
import FirstLogIn from './Pages/FirstLogIn';
import ForgetPassWord from './Pages/ForgetPassWord';

function App() {
  return (
   <BrowserRouter>
     <Routes>
     <Route index element={<NewsPage/>}/>
     <Route path="foodcar" element={<FoodCard/>}/>
     <Route path="brand" element={<BrandStoty/>}/>
     <Route path="food" element={<Foods/>}/>
     <Route path="stores" element={<StoresInformation/>}/>
     <Route path="online" element={<OnlineOrder/>}/>
     <Route path="explain" element={<OnlineExplain/>}/>
     <Route path="join" element={<JoinUs/>}/>
     <Route path="member" element={<LoginMember/>}/> 
     <Route path="vip" element={<VIP/>}/> 
     <Route path="rice" element={<RiceComponent/>}/>
     <Route path='firstLogin' element={<FirstLogIn/>}/>
     <Route path='forgetPass' element={<ForgetPassWord/>}></Route>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
