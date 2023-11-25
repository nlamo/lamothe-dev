import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import classes from './_Base.module.scss';

export default function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group gap={0} className={classes.links} justify='flex-end' wrap='nowrap'>
          <ActionIcon component='a' href='https://github.com/nlamo' size='lg' color='gray' variant='subtle'>
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon component='a' href='https://www.linkedin.com/in/nicholas-lamothe' size='lg' color='gray' variant='subtle'>
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}