'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';

import classes from './_ColorSchemeToggle.module.scss'

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button 
        variant='gradient'
        gradient={{ from: 'blue.3', to: 'blue.4', deg: 90 }}
        onClick={() => setColorScheme('light')}
      >
        Light
      </Button>
      <Button 
        variant='gradient'
        gradient={{ from: 'blue.5', to: 'blue.6', deg: 90 }}
        onClick={() => setColorScheme('dark')}
      >
        Dark
      </Button>
    </Group>
  );
}
