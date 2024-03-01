'use client';

import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children, session }) => {
 
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default Providers;
