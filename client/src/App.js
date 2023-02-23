import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet
} from "react-router-dom";
import Header from "./views/Header.jsx";
import Footer from "./views/Footer.jsx";
import Home from "./views/Home.jsx";
import Aboutus from "./views/Aboutus.jsx";
import Career from "./views/Career.jsx";
import Socialactivity from "./views/Socialactivity.jsx";
import Services from "./views/Services.jsx";
import Business from "./views/Business.jsx";
import Retail from "./views/Retail.jsx";
import Education from "./views/Education.jsx";
import Manufacturing from "./views/Manufacturing.jsx";
import Healthcare from "./views/Healthcare.jsx";
import Automotive from "./views/Automotive.jsx";
import Realestate from "./views/Realestate.jsx";
import Newsmagazine from "./views/Newsmagazine.jsx";
import Hiredeveloper from "./views/Hiredeveloper.jsx";
import Contact from "./views/Contact.jsx";
import Product from "./views/Product.jsx";
const Layout = () => {
  return (
    <>
      <Header></Header>
      {/* <Sidebar></Sidebar> */}
      <Outlet/>
      {/* <Aboutus></Aboutus> */}
      <Footer></Footer>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      
      
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Aboutus",
        element: <Aboutus/>,
      },
      {
        path:"/Career",
        element:<Career/>,
      },
      {
        path:"/Socialactivity",
        element:<Socialactivity/>,
      },
      {
        path:"/Services/:id",
        element:<Services/>,
      },
      {
        path:"/Services",
        element:<Services/>,
      },
      {
        path:"/Products/:id",
        element:<Product/>,
      },
      {
        path:"/Business/:id",
        element:<Business/>,
      },
      {
        path:"/Retail/:id",
        element:<Retail/>,
      },
      {
        path:"/Education/:id",
        element:<Education/>,
      },
      {
        path:"/Manufacturing/:id",
        element:<Manufacturing/>,
      },
      {
        path:"/Healthcare/:id",
        element:<Healthcare/>,
      },
      {
        path:"/Automotive/:id",
        element:<Automotive/>,
      },
      {
        path:"/Realestate/:id",
        element:<Realestate/>,
      },
      {
        path:"/Newsmagazine/:id",
        element:<Newsmagazine/>,
      },
      {
        path:"/Hiredeveloper/:id",
        element:<Hiredeveloper/>,
      },
      {
        path:"/Contact",
        element:<Contact/>,
      }
      
    ]
  }
]);

function App() {
  return (
    <>
     
      <RouterProvider router={router} />
    </>
  );
}
export default App;
