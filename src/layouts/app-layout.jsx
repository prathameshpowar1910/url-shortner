import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div style={{fontFamily:"Pixelify Sans"}} className="p-10 text-center bg-gray-800 mt-10 text-2xl">
        Made with 🧠 by <a href="https://github.com/prathameshpowar1910" > Prathamesh Powar</a>
      </div>
    </div>
  );
};

export default AppLayout;
