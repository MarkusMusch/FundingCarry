import "@mantine/core/styles.css";
import { AppShell, AppShellFooter, AppShellHeader, AppShellMain, Group, MantineProvider, Text } from "@mantine/core";

export default function App() {
  return <MantineProvider forceColorScheme="dark">
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
          <Text>
            My App
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
