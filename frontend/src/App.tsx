import { useEffect, useState } from "react";
import axios from "axios";
import "@mantine/core/styles.css";
import { ActionIcon, AppShell, AppShellFooter, AppShellHeader, AppShellMain, Group, MantineProvider, Paper, Text } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/")
      .then((response) => {setMessage(response.data.message);})
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return <MantineProvider forceColorScheme={theme}>
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 40 }}
      p="xl"
      m="xl"
    >
      <AppShellHeader>
        <Group
          align="right"
          p="md"
          pr="lg"
        >
        <ActionIcon
          variant="transparent"
          color="yellow"
          size="lg"
          onClick={toggleTheme}
        >
          <Paper
            style={{ display: theme === "light" ? "none" : "block" }}
          >
            <IconSun size={25} />
          </Paper>
          <Paper
            style={{ display: theme === "dark" ? "none" : "block" }}
          >
            <IconMoon size={25} />
          </Paper>
        </ActionIcon>
        <Text
          size="xl"
          p="lg"
        >
          Hello, FastAPI says: {message}
        </Text>
        </Group>
      </AppShellHeader>
      <AppShellMain>
      </AppShellMain>
      <AppShellFooter
        p="xs"
      >
        <Text
          size="xs"
          p="xxs"
        >
          © 2025, None ofthe above is financial advice.
        </Text>
      </AppShellFooter>
    </AppShell>
  </MantineProvider>;
}
