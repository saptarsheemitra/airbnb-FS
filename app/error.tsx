"use client";

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorPageProps {
  error: Error;
}

const ErrorPage = ({ error }: ErrorPageProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Uh Oh" subtitle="Something went wrong" />;
};

export default ErrorPage;
