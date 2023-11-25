'use client';

import { Grid, ScrollArea } from '@mantine/core';

import { Welcome } from '@/components/Welcome/Welcome';
import { Navigation } from '@/components/Base/Navigation';

import classes from './_MainGrid.module.scss';
import Content from '../Base/Content';

export function MainGrid() {
  return (
    <>
      <Grid justify='flex-center'>
        <Grid.Col span={1.5} className={classes.leftColumn}>
          <Navigation />
        </Grid.Col>
        <Grid.Col span={10.5} className={classes.rightColumn}>
          <ScrollArea.Autosize>
            <Welcome />
            <Content />
          </ScrollArea.Autosize>
        </Grid.Col>
      </Grid>
    </>
  );
}