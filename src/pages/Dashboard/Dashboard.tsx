import React from "react";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

export default function DogList() {
  useAuthRedirect();
  return <div>Dashboard</div>;
}
