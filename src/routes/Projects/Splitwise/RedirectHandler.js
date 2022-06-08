import React, { useState } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
export default function RedirectHandler() {
  const [searchParams, setSearchParams] = useSearchParams();
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  let from = location.state?.from?.pathname || "dashboard";
  const getAccessToken = async () => {
    setLoading(true);
    const code = searchParams.get("code") || "invalid";
    const state = searchParams.get("state") || "invalid";
    try {
      await auth.signIn(code);
      navigate(from, { replace: true });
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  React.useEffect(() => {
    getAccessToken();
  }, []);
  return (
    <div>Redirect Handler {loading ? "loading ..." : "fetch access token"}</div>
  );
}
