import React, { useState, useEffect } from "react"; // Import useEffect hook
import "./App.css";
import HomePages from "./HomePages";
import LoanPage from "./LoanPage";
import Calculator from "./Calculator";
import Chatbot from "./Chatbot";
import FAQ from "./FAQ";
import Status from "./Status";
import Header from "./Header";
import PersonalDetails from "./PersonalDetails";
import PropertyDetails from "./PropertyDetails";
import Identity from "./Identity";
import CreditCard from "./CreditCard";
import Assets from "./Assets";
import Income from "./Income";
import Address from "./Address";
import Employee from "./Employee";
import Investment from "./Investment";
import Loan from "./Loan";
import LoginSignupPage from "./LoginSignupPage"; // Import the LoginSignupPage component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Use a state variable to track the login status

  useEffect(() => {
    // Use useEffect hook to check the local storage for login status
    const storedLoginStatus = localStorage.getItem("isLoggedIn"); // Get the stored value of isLoggedIn
    if (storedLoginStatus) {
      // If it exists, parse it and set the state variable accordingly
      setIsLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []); // Run the effect only once on mount

  const handleLogin = (value) => {
    // Define a handler function to update the login status and store it in local storage
    setIsLoggedIn(value); // Update the state variable
    localStorage.setItem("isLoggedIn", JSON.stringify(value)); // Store the value in local storage
  };

  return (
    <div>
      <Header />
      <div className="main">
        <Router>
          <Routes>
            {isLoggedIn ? ( // If the user is logged in, render the home page and other routes
              <>
                <Route path="/" element={<HomePages />} />
                <Route path="/LoanPage" element={<LoanPage />} />
                <Route path="/Calculator" element={<Calculator />} />
                <Route path="/Chatbot" element={<Chatbot />} />
                <Route path="/FAQ" element={<FAQ />} />
                <Route path="/Status" element={<Status />} />
                <Route path="/PersonalDetails" element={<PersonalDetails />} />
                <Route path="/PropertyDetails" element={<PropertyDetails />} />
                <Route path="/Identity" element={<Identity />} />
                <Route path="/CreditCard" element={<CreditCard />} />
                <Route path="/Assets" element={<Assets />} />
                <Route path="/Income" element={<Income />} />
                <Route path="/Address" element={<Address />} />
                <Route path="/Employee" element={<Employee />} />
                <Route path="/Investment" element={<Investment />} />
                <Route path="/Loan" element={<Loan />} />
              </>
            ) : (
              // If the user is not logged in, render the login/signup page
              <Route
                path="/*"
                element={
                  <LoginSignupPage setIsLoggedIn={handleLogin} /> // Pass the handleLogin function as a prop
                }
              />
            )}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
