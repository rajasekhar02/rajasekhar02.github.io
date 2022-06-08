import React, { useState } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";
export default function RedirectHandler() {
  const [searchParams, setSearchParams] = useSearchParams();
  let [loading, setLoading] = useState(true);
  // const loading = true;
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  let from = location.state?.from?.pathname || "/projects/splitwise/dashboard";
  const getAccessToken = async () => {
    const code = searchParams.get("code") || "invalid";
    if (code === "invalid") {
      navigate("/projects", { replace: true });
    }
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
    // console.log("print");
  }, []);
  return (
    <div>Redirect Handler {loading ? "loading ..." : "fetch access token"}</div>
  );
}
