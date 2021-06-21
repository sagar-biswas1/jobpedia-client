import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminDash from "./pages/DashBoard/admin/AdminDash";
import EmployerDash from "./pages/DashBoard/employer/EmployerDash";
import AllEmployer from "./pages/DashBoard/admin/AllEmployer";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import Pricing from "./pages/Pricing";
import GeneralUserSignup from "./pages/login/GeneralUserSignup";
import PostJob from "./pages/DashBoard/employer/PostJob";
import ManageJobs from "./pages/DashBoard/employer/ManageJobs";
import AllApplications from "./pages/DashBoard/employer/AllApplications";
import JobApplyPage from "./pages/JobApplyPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/job/:id" component={Home} />
          <PrivateRoute exact path="/employer-dashboard">
            <EmployerDash />
          </PrivateRoute>
          <PrivateRoute exact path="/employer-dashboard/post-job">
            <PostJob />
          </PrivateRoute>
          <PrivateRoute exact path="/employer-dashboard/manage-jobs">
            <ManageJobs />
          </PrivateRoute>
          <PrivateRoute exact path="/employer-dashboard/all-applications">
            <AllApplications />
          </PrivateRoute>
          <PrivateRoute exact path="/admin-dashboard/job-list">
            <AdminDash />
          </PrivateRoute>
          <PrivateRoute exact path="/admin-dashboard/all-employers">
            <AllEmployer />
          </PrivateRoute>
          <PrivateRoute exact path="/apply/:id">
            <JobApplyPage />
          </PrivateRoute>

          <Route exact path="/login" component={Login} />
          <Route exact path="/user-signup" component={GeneralUserSignup} />
          <Route path="/signup/:deal" component={Signup} />
          <Route exact path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
