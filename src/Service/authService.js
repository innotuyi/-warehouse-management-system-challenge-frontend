export async function isAuthenticated() {

    const token = localStorage.getItem('token');
    return !!token; 
  }
  
  export async function getUserRole() {
    const userRole = localStorage.getItem('role');
   
    return userRole;
  }