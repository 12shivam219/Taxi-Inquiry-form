# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


The code is a React component that creates a form for making inquiries. It uses the useRef and useState hooks to manage the state of the form inputs. It also uses the emailjs library to send the form data to an email service.

The form includes the following input fields:

Name: a text input for the name of the person making the inquiry
Email: an email input for the email of the person making the inquiry
Phone Number: a text input for the phone number of the person making the inquiry
No Of Passengers: a number input for the number of passengers
Pickup Date: a date input for the pickup date
Pickup Time: a time input for the pickup time
Pickup Location: a text input for the pickup location
Dropoff Location: a text input for the dropoff location
Additional Information: a textarea input for any additional information the person making the inquiry wants to provide
The component also includes some functions for validating the form and displaying a confirmation message when the form is submitted. When the form is submitted, the Submit function is called, which sends the form data to the email service using the emailjs library. After a delay of 3 seconds, the confirmationMessage function is called to display a confirmation message.



