import React, { useState } from 'react';

import './Login.css'



const LoginSignupPage = ({ setIsLoggedIn }) => {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [username, setUsername] = useState('');

  const [isLogin, setIsLogin] = useState(true);

  const [errorMessage, setErrorMessage] = useState('');



  const handleSubmit = (event) => {

    event.preventDefault();



    // Perform login or signup logic here

    if (isLogin) {

      // Perform login

      const loginData = {

        email,

        userPassword: password, // Change the key to userPassword to match the data

      };



      fetch('https://mortgageautomationgroupa.azurewebsites.net/register', {

        method: 'GET', // Change the method to GET to fetch the data

        headers: {

          'Content-Type': 'application/json',

        },

      })

        .then((response) => response.json())

        .then((data) => {

          console.log('Fetched data:', data);

          // Find the user with matching email and password in the data
          const user = data.find(
            (user) =>
              user.email === loginData.email &&
              user.userPassword === loginData.userPassword // Change the key to userPassword to match the data
          );

          if (user) {
            // If user exists, login successful
            console.log('Login successful!', user);
            // Reset form fields
            setEmail('');
            setPassword('');
            setIsLoggedIn(true); // Set isLoggedIn to true after successful login
          } else {
            // If user does not exist, login failed
            console.error('Error logging in:', 'User not found');
            setErrorMessage('Invalid email or password'); // Display error message
          }
        })

        .catch((error) => {

          console.error('Error fetching data:', error);

          setErrorMessage('Error occurred during login'); // Display error message

        });

    } else {

      // Perform signup

      const signupData = {

        id: generateRandomId(), // Randomly generated id

        email,

        username,

        userPassword: password, // Change the key to userPassword to match the data

      };

      // Define a regular expression to validate the password
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      // Define a regular expression to validate the username
      const usernameRegex = /^[A-Za-z][A-Za-z\d]{5,}$/;

      if (passwordRegex.test(password) && usernameRegex.test(username)) {
        // If both the password and username match the regexes, proceed with signup
        fetch('https://mortgageautomationgroupa.azurewebsites.net/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signupData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Signup successful!', data);
            alert(signupData.id + ' is your id save it for further use');
            // Reset form fields
            setEmail('');
            setUsername('');
            setPassword('');
            setIsLoggedIn(true); // Set isLoggedIn to true after successful signup
          })
          .catch((error) => {
            console.error('Error signing up:', error);
            setErrorMessage('Error occurred during signup'); // Display error message
          });
      } else {
        // If either the password or username does not match the regexes, display an error message
        setErrorMessage(
          'Password must contain at least one lowercase letter, one uppercase letter, one digit and one special character and be at least 8 characters long. Username must start with a letter and contain only letters and digits and be at least 6 characters long.'
        );
      }
    }

  };



  const generateRandomId = () => {

    return Math.floor(Math.random() * 100000);

  };



  return (

    <div>

      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

      {errorMessage && <p>{errorMessage}</p>}

      <form onSubmit={handleSubmit}>

        <label>Email:</label>

        <input

          type="email"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

          required

        />



        {!isLogin && (

          <>

            <label>Username:</label>

            <input

              type="text"

              value={username}

              onChange={(e) => setUsername(e.target.value)}

              required

            />

          </>

        )}



        <label>Password:</label>

        <input

          type="password"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

          required

        />



        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>

      </form>



      <p>

        {isLogin ? "Don't have an account?" : 'Already have an account?'}

        <button onClick={() => setIsLogin(!isLogin)}>

          {isLogin ? 'Sign Up' : 'Login'}

        </button>

      </p>

    </div>

  );

};



export default LoginSignupPage;
