import decode from 'jwt-decode';

class AuthService {

  userZoneGlobal;
  getProfile(token) {
    if (!token) {
      token = this.getToken();
    }
    if (token) {
      const decodedToken = decode(token);
      console.log("Decoded Token UserType:", decodedToken.data.userType);
      const userType = decodedToken.data.userType;
      let userZone = '';
  
      if (userType === "Babysitter") {
        // Retrieve the babysitter's zone from the token payload
        userZone = decodedToken.data.zone;
      } else if (userType === "Parent") {
        // Retrieve the parent's zone from the token payload
        userZone = decodedToken.data.zone;
      }

      return {
        ...decodedToken,
        userZone,
      };
    }
    return null;
  }

  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  getUserType() {
    const token = this.getToken();
    console.log("Token:", token);
    if (token) {
      try {
        const decodedToken = decode(token);
        console.log("Decoded Token:", decodedToken);
        return decodedToken.userType;
      } catch (error) {
        console.log("Error decoding token:", error);
      }
    }
    return null;
  }



  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
