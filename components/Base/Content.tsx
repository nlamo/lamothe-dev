import { Container, Flex, Space } from '@mantine/core';

import Images from '../Sections/Images';
import Overview from '../Sections/Overview';
import Projects from '../Sections/Projects';
import Contact from '../Sections/Contact';
import Footer from './Footer';

export default function Content() {
  return (
    <Container size='md'>
      <Flex   
        rowGap='lg'
        columnGap='lg'
        justify='center'
        direction='column'
      >
        <Images></Images>
        <Overview></Overview>
        <Projects></Projects>
        <Contact></Contact>
        <Space h='xl'/>
        <Footer/>
      </Flex>
    </Container>
  )
}