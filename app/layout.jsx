import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
// import ThemeSwitcher from "./ThemeSwitcher";
import { ThemeProvider } from '@/context/ThemeContext';


export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Comments",
};


const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <ThemeProvider>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />

            {children}
          </main>
        </Provider>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
