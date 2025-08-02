"use client";

import { useState } from "react";

type AlertType = {
  show: boolean;
  text: string;
  type: "success" | "danger" | "info";
};

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, text: "", type: "danger" });

  const showAlert = ({ text, type = "danger" }: AlertType) =>
    setAlert({ show: true, text, type });
  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
