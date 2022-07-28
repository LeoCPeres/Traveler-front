import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { AuthContextProvider, useAuth } from "../contexts/AuthContext";
import { Sidebar } from "../components/Sidebar";

import styles from "../styles/app.module.scss";
import { FormContextProvider } from "../contexts/FormContext";

function MyApp({ Component, pageProps }: AppProps) {
  const { email } = useAuth();

  return (
    <AuthContextProvider>
      <FormContextProvider>
        <ChakraProvider theme={theme}>
          <div className={styles.wrapper}>
            <Sidebar />
            <main>
              <Component {...pageProps} />
            </main>
          </div>
        </ChakraProvider>
      </FormContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
