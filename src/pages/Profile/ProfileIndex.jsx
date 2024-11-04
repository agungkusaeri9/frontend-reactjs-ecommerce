import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import authService from "./../../services/auth-service";

function ProfileIndex() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const result = await authService.profile();
      setUser(result.data.data);
    } catch (error) {
      console.log(error.data);
    }
  };

  return (
    <>
      <MainLayout>
        <h1>Profile {user.name}</h1>
      </MainLayout>
    </>
  );
}

export default ProfileIndex;
