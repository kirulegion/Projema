"use client";

import React from "react";
import { LoginForm } from "./LoginForm";
import { Toaster } from "@/components/ui/sonner";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-minus-135 ">
      <Toaster />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
