'use client';

import { Button, Group, useMantineColorScheme, MantineColorScheme } from '@mantine/core';

import { IconBrightness } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  const toggleColorScheme = (value?: MantineColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <Group justify="center" mt="xl">
      <Button
        variant='gradient'
        gradient={{ from: 'blue.3', to: 'blue.4', deg: 90 }}
        onClick={() =>
          toggleColorScheme()
        }
      >
        <IconBrightness size={30} />
      </Button>
    </Group>
  );
}
