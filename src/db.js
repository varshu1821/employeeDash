// Function to add a new user to the database
export const addUser = (user) => {
    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    // Add the new user to the existing users array
    const updatedUsers = [...existingUsers, user];
    // Update the users data in localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };
  
  // Function to find a user by email
  export const findUserByEmail = (email) => {
    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    // Find and return the user by email
    return existingUsers.find((user) => user.email === email);
  };
  