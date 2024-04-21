import {useContext, useState} from "react";
import { useAuth } from "../UserContext.jsx";
import {Link, Navigate, useParams} from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function ProfilePage() {
  const [redirect,setRedirect] = useState(null);
  // const {ready,user,setUser} = useContext(UserContext);
  const [auth, setAuth]= useAuth();
  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout() {
    await fetch('http://localhost:4000/api/logout')
    localStorage.clear();
    setRedirect('/login');
    setAuth({ user: null })
  }

  if (!auth&&auth.ready) {
    return 'Loading...';
  }

  if (auth&&auth.ready && !auth&&auth.user && !redirect) {
    return <Navigate to={'/api/login'} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }
  return (
    <div>
      <AccountNav />
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {auth?.user?.name} ({auth?.user?.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
        </div>
      )}
      {subpage === 'places' && (
        <PlacesPage />
      )}
    </div>
  );
}