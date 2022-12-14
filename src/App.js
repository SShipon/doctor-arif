import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import router from "./Routes/Routes/Routes";


function App() {
  return (
    <div className="max-w-[1440px] mx-auto App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
