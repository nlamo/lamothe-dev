'use client';

import { Button, Group, useMantineColorScheme, MantineColorScheme } from '@mantine/core';

import { IconBrightness } from '@tabler/icons-react';

import classes from './_ColorSchemeToggle.module.scss';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme()

  const toggleColorScheme = (value?: MantineColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <Group className={classes.colorSchemeToggleContainer} justify='center' mt='xl'>
      <Button
        className={classes.colorSchemeToggle}
        variant='gradient'
        gradient={{ from: 'blue.3', to: 'blue.4', deg: 90 }}
        onClick={() =>
          toggleColorScheme()
        }
      >
        <IconBrightness size={40} />
      </Button>
    </Group>
  );
}
