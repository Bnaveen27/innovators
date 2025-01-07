// import React from 'react'
// import { Outlet, Navigate } from 'react-router-dom'

// const Protected = () => {
//   // Example: Check if user is authenticated (you might be checking JWT token in localStorage)
//   const user = localStorage.getItem('authToken'); // Replace with your authentication check

//   // Alert for testing purposes (remove in production)
//   if (!user) {
//     alert('You must submit the form to log in first');
//   }

//   // If user is authenticated, show the content inside <Outlet>
//   // If not, redirect them to the login page ("/")
//   return user ? <Outlet /> : <Navigate to="/Gallery" />
// }

// export default Protected
