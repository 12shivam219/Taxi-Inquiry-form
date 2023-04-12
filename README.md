# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
This is a React component named Inquiry. It imports React, useRef, useState, and the emailjs library. It exports the Inquiry function as a default export.

The Inquiry function sets up a form using a ref to the form element. It also sets up a number of state variables to manage input fields in the form, including name, email, number, passenger, pickupDate, pickupTime, pickupLocation, DropoffLocation, and textarea.

The function also defines minMonth, minDate, maxDate, maxYear, maxMonth, and maxDay constants, which are used to set the minimum and maximum date values for the pickupDate input field.

There is a validateForm function that is used to validate the email address entered in the email field.

The Submit function is used to send the form data using the emailjs.sendForm method. It then resets the state variables for all input fields in the form.

The component returns a form with input fields for name, email, number, passenger, pickupDate, pickupTime, pickupLocation, DropoffLocation, and textarea. Each input field is connected to a state variable using the useState hook. The form also includes a submit button.
