import { useState } from "react";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { ActionIcon, AppShell, AppShellFooter, AppShellHeader, AppShellMain, Group, MantineProvider, Paper, Text } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import StrategyTabs from "./components/StrategyTabs/index";

export default function App() {
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
        </Group>
      </AppShellHeader>
      <AppShellMain>
        <StrategyTabs/>
      </AppShellMain>
      <AppShellFooter
        p="xs"
      >
        <Text
          size="xs"
          p="xxs"
        >
          © 2025, None of the above is financial advice.
        </Text>
      </AppShellFooter>
    </AppShell>
  </MantineProvider>;
}
