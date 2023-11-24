'use client';

import { Container, Grid } from '@mantine/core';

import { Welcome } from '@/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { Navigation } from '@/components/Base/Navigation';

export function MainGrid(props: any) {
  return (
    <>
      <Grid justify="flex-center">
        <Grid.Col span={1.5}>
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