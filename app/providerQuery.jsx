"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

export default function ProviderQuery({ children }) {
  const [clientQuery] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={clientQuery}>{children}</QueryClientProvider>
  );
}
