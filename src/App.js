import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import ContactUs from './component/ContactUs/ContactUs';
import Home from './component/Home/Home';
import Main from './component/Main/Main';
import OurAim from './component/OurAim/OurAim';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>
        },
        {
          path: "/about",
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },
          element: <About></About>
        },
        {
          path: "/ourAim",
          element: <OurAim></OurAim>
        },
        {
          path: "/contactUs",
          element: <ContactUs></ContactUs>
        }
      ]
    },
    { path: '*', element: <div className='p-4 bg-orange-600 text-white h-screen flex items-center justify-center'><h1 className='text-5xl'>ThiS link not VALID</h1></div> }
  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
