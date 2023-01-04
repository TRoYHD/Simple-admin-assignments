import React from "react"
import NavBar from  "./My-components/NavBar.js";
import Signup from "./My-components/Signup.js";
import {Container} from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Dashboard from "./My-components/Dashboard"
import Login from "./My-components/Login"
import PrivateRoute from "./My-components/PrivateRoute.js";
import ForgotPassword from "./My-components/ForgotPassword.js";
import UpdateProfile from "./My-components/UpdateProfile.js";


function App() {
  return (
   <>
   <div className="container1">
            <NavBar />
            </div>

   <Container 
   className="d-flex align-items-center justify-content-center" 
   style={{minHeight: "50vh" , maxHeight:"100vh"}} 
   > 
   <div className="w-100" style={{maxWidth:"400px"}}>
     <Router>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<PrivateRoute> <Dashboard /> </PrivateRoute>
         } ></Route>
         <Route path="/update-profile" element={<PrivateRoute> <UpdateProfile /> </PrivateRoute>}
         ></Route>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
      </AuthProvider>
     </Router>
     
   </div>
   </Container>
     </>

  )
}

export default App;
 