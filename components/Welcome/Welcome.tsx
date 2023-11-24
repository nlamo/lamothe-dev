import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.scss';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta='center' mt={100}>
        Hello! I'm{' '} 
        <Text className={classes.animatedHeaderText}>
          Nicholas
        </Text>.
      </Title>
      <Text c='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        And, yes, I'm a web developer. Mainly experienced in the LAMP stack / WordPress space. Check out my{' '}
        <Anchor href='https://www.nicholaslamothe.com/' size='lg'>
          original website{' '}
        </Anchor>
        for a point of comparison (but note that it's not WordPress).
      </Text>
    </>
  );
}
