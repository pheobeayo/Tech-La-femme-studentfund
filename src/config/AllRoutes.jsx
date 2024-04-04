import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";
import Layout from "../layout/Layout";



const AllRoutes = () => {
  const Home = lazy(() => import("../pages/home/Home"));
  
  
  
  return (
    <div>
      <Toaster />
      <Suspense fallback={<PageLoader />}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
             
            </Routes>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default AllRoutes;