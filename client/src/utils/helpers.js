import Auth from "./auth";

export function getUserType() {
    
  if (Auth.loggedIn()) {
    const token = Auth.getToken();
    if (token) {
      const decodedToken = Auth.getProfile(token);
      if (decodedToken && decodedToken.data) {
        console.log("Decoded Token:", decodedToken);
        return decodedToken.data.userType;
      }
    }
  }
  return null;
}
