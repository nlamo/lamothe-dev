import { Anchor, Card, Space, Text, Title } from '@mantine/core'

import classes from './_Sections.module.scss'

export default function Overview() {
  return (
    <Card shadow='lg' padding='lg' radius='md' withBorder>
      <div id='overview-section' className='section-container'>
        <section className='overview-1'>
          <Title className={classes.animatedHeaderText} order={3}>Overview</Title>
          <Space h='md' />
          <Text>
            Greetings! My name is Nicholas, and I am a web developer. I work in any number of languages or frameworks, contingent upon the shifting sands of time - or the needs of the employer.
          </Text>
          <Space h='sm' />
          <Text>
            Shall this be a lorem? Will I partake in loremification? Ready, set... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore saepe voluptatum eius, animi exercitationem dolorem!
          </Text>
          <Space h='sm' />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum explicabo iure nemo suscipit magnam, accusamus sit recusandae excepturi neque?
          </Text>
          <Space h='sm' />
        </section>
      </div>
      <div id='overview-section-2' className='section-container'>
        <section className='overview-2'>
          <Text>
            My enthusiasm for computer technology started at a young age - from troubleshooting issues in MS-DOS with my father to using the terminal of a Commodore 64 for the first time in one of the school portables. This developed concurrently with my obsession with computer gaming, which sparked an interest in hardware and building desktop computers.
          </Text>
          <Space h='sm' />
          <Text>
            During university, my focus was philosophy and literature, with a special interest in philosophy of mind, ethics, and modernism. Years later, by way of literary insight, I began programming.
          </Text>
          <Space h='sm' />
          <Text>
            My experience has been primarily with the LAMP stack, with a healthy balance of front-end (CSS/Sass/JS/jQuery/React) and back-end (PHP/MySQL).
          </Text>
          <Space h='sm' />
          <Text>
            Recreationally, I like to spend my time enagaged with film, literature, illustration, music, gaming, and cycling.
          </Text>
          <Space h='sm' />
          <Text>
            You can find my resume{' '}
            <Anchor href='./nicholas-lamothe-resume.pdf' target='_blank'>here</Anchor>.
          </Text>
        </section>
      </div>
    </Card>
  )
}
