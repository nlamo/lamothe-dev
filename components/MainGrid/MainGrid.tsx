'use client';

import { Grid } from '@mantine/core';

import { Welcome } from '@/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Navigation } from '@/components/Base/Navigation';

import classes from './MainGrid.module.scss';

export function MainGrid() {
  return (
    <>
      <Grid justify="flex-center">
        <Grid.Col span={1.5} className={classes.fullHeight}>
          <Navigation />
        </Grid.Col>
        <Grid.Col span={10.5}>
          <Welcome />
          <ColorSchemeToggle />
        </Grid.Col>
      </Grid>
    </>
  );
}