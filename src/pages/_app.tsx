import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthContextProvider } from "../contexts/AuthContext";
import { Sidebar } from "../components/Sidebar";

import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ChakraProvider theme={theme}>
        <div className={styles.wrapper}>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
