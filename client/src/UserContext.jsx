// import { createContext, useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { data } from "autoprefixer";

// export const UserContext = createContext({});

// export function UserContextProvider({ children }) {
//   // const [user, setUser] = useState(null);
//   // const [ready, setReady] = useState(false);
//   const [auth, setAuth] = useState({
//     user: null,
//     ready: false
//   });
//   useEffect(async () => {
//     if (!auth.user) {
//       // axios.get('/profile').then(({data}) => {
//       //   setUser(data);
//       //   setReady(true);
//       // });
//       let result = await fetch('http://localhost:4000/api/profile', {
//         method: 'GET',
//         credentials: 'include'
//       })
//       result = await result.json()
//       setAuth({
//         user: result.user,
//         ready: true
//       })
//     }
//     // console.log(user);
//   }, []);
//   return (
//     <UserContext.Provider value={[auth, setAuth]}>
//       {children}
//     </UserContext.Provider>
//   );
// }
// const useAuth = () => useContext(UserContext);

// export { useAuth };

import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // Set authorization header for fetch requests
  // const headers = new Headers();
  // headers.append("Authorization", auth?.token);

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };