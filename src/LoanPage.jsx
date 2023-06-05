import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function LoanPage() {
  return (
    <div>
      <NavBar />
      <div style={{ width: "100%", padding: "12px" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "25%" }}>
            <div
              style={{
                border: "1px solid #dee2e6",
                borderRadius: "0.25rem",
                backgroundColor: "#f8f9fa",
              }}
            >
              <div
                style={{
                  padding: "0.75rem 1.25rem",
                  borderBottom: "1px solid #dee2e6",
                  backgroundColor: "#f8f9fa",
                  fontWeight: "bold",
                }}
              >
                Loan Application
              </div>
              <div style={{ padding: "0.75rem 1.25rem" }}>
                <ul
                  style={{
                    listStyleType: "none",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  <li style={{ marginBottom: "0.5rem" }}>
                    <Link
                      to="/PersonalDetails"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      <span>Personal Details</span>
                    </Link>
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <Link
                      to="/PropertyDetails"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      <span>Property Details</span>
                    </Link>
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <Link
                      to="/Identity"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      <span>Identity</span>
                    </Link>
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <Link
                      to="/CreditCard"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      <span>Credit Card</span>
                    </Link>
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <Link
                      to="/Assets"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      <span>Assets</span>
                    </Link>
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <Link
                      to="/Income"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      <span>Income</span>
                    </Link>
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <Link
                      to="/Address"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      <span>Address</span>
                    </Link>
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <Link
                      to="/Employee"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      <span>Employee</span>
                    </Link>
                  </li>
                  <li style={{ marginBottom: "0.5rem" }}>
                    <Link
                      to="/Loan"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color:
                          "#007bff",

                        textDecoration:
                          "none",

                      }}
                    >
                      <span>Loan</span>
                    </Link>
                  </li>
                  <li style={{ marginBottom:
                      

"0.5rem" }}>
                    <Link
                      to="/Investment"
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        color: "#007bff",
                        textDecoration: "none",
                      }}
                    >
                      <span>Investment</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanPage;
