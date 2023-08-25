"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("10a64cfa-3901-4063-a02c-faeb4df3e577");
  }, []);

  return null;
};