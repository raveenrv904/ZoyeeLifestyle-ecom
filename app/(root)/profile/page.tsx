"use client";

import { isAuthenticated } from "@/utils/isAuth";
import { redirect } from "next/navigation";
import React, { useLayoutEffect } from "react";

const ProfilePage = () => {
  useLayoutEffect(() => {
    const isAuth = isAuthenticated;
    if (!isAuth) {
      redirect("/sign-in");
    }
  }, []);

  return <div>ProfilePage</div>;
};

export default ProfilePage;
