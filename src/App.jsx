import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "./components/section/Header";
import Main from "./components/section/Main";
import { useEffect, useState } from "react";
import Container from "./components/ui/Container";

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Container>
          <Header />
          <Main />
        </Container>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default App;
