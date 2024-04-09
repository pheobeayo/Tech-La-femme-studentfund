import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PageLoader from "../components/Loader/PageLoader";
import Layout from "../layout/Layout";

const AllRoutes = () => {
  const Home = lazy(() => import("../pages/home/Home"));
  const CreateProposal = lazy(() =>
    import("../pages/create-proposal/CreateProposal")
  );
  const SecondCreateProposal = lazy(() =>
    import("../pages/create-proposal/SecondCreateProposal")
  );
  const SubmitProposal = lazy(() =>
    import("../pages/create-proposal/SubmitProposal")
  );
  const Login = lazy(() => import("../pages/login/login"));
  const Aboutus = lazy(() => import("../pages/about-us/Aboutus"));
  const ProjectDetails = lazy(() => import("../pages/projectdetail/ProjectDetails"));
  const StudentProjectDetails = lazy(() => import("../pages/projectdetail/StudentProjectDetails"));
  return (
    <div>
      <Toaster />
      <Suspense fallback={<PageLoader />}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-proposal" element={<CreateProposal />} />
              <Route
                path="/secondcreate-proposal"
                element={<SecondCreateProposal />}
              />
              <Route path="/submit-proposal" element={<SubmitProposal />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about-us" element={<Aboutus />} />
              <Route path="/fund" element={<ProjectDetails />} />
              <Route path="/student-details" element={<StudentProjectDetails />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default AllRoutes;
