import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import homeImage from './homeImage.jpg';

function HomePages() {
  // Create a state variable to store the data from the API
  const [data, setData] = useState(null);

  // Use useEffect hook to fetch the data when the component mounts
  useEffect(() => {
    // Get the token from localStorage
    const token = localStorage.getItem('jwt');

    // Use fetch to make a GET request to the API with the token as a header
    fetch('https://mortgageautomationgroupa.azurewebsites.net/register', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        // Filter out the data that doesn't match the user id
        const currentUser = data.filter(item => item.id === 1);
        // Set the data in state
        setData(currentUser);
      })
      .catch(error => console.error(error)); // Handle any errors
  }, []); // Pass an empty dependency array to run only once

  return (
    <div>
      <NavBar />
      <Container fluid className="p-3">

        {/* Display the data from the API */}
        {data && (
          <Row className="mt-4">
            {/* Use map to iterate over the data array and display each item */}
            {data.map(item => (
              <Col md={4} key={item.id}>
                {/* Use template literals to display the id and username */}
                <h3>Welcome {item.username}-{item.id}</h3>
              </Col>
            ))}
          </Row>
        )}

        <Row className="align-items-center">
          <Col md={6}>
            <h1>Welcome to Our Website!</h1>
            <p>We are a leading provider of mortgage automation solutions that help you streamline your workflow and reduce costs. Whether you are a lender, broker, or borrower, we have the right tools for you.</p>
            <Button variant="primary" href="/about">Learn More</Button>
          </Col>
          <Col md={6}>
            <img src={homeImage} alt="Home page banner" width="100%" />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>For Lenders</Card.Title>
                <Card.Text>
                  Our platform helps you automate the entire loan origination process, from application to closing. You can manage your pipeline, track documents, communicate with borrowers, and generate reports with ease.
                </Card.Text>
                <Button variant="secondary" href="/lenders">See Features</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>For Brokers</Card.Title>
                <Card.Text>
                  Our platform helps you connect with multiple lenders and find the best rates and terms for your clients. You can submit applications, compare offers, negotiate fees, and close deals faster.
                </Card.Text>
                <Button variant="secondary" href="/brokers">See Features</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>For Borrowers</Card.Title>
                <Card.Text>
                  Our platform helps you find the best mortgage option for your needs. You can apply online, upload documents, check your status, and chat with your loan officer anytime, anywhere.
                </Card.Text>
                <Button variant="secondary" href="/borrowers">See Features</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        
      </Container>
    </div>
  );
}

export default HomePages;
