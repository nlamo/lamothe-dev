import { Card, Space, Text, Title } from '@mantine/core'

import classes from './_Sections.module.scss';

export default function Thoughts() {
  return (
    <Card shadow='lg' padding='lg' radius='md' withBorder>
      <div id='thoughts-section' className='section-container'>
        <section className='thoughts'>
          <Title className={classes.animatedHeaderText} order={3}>Thoughts</Title>
          <Space h='md'/>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolores debitis laboriosam dolorum similique reiciendis deserunt voluptates incidunt adipisci, quidem est sed voluptatem provident exercitationem suscipit quod non. Aut, recusandae deleniti? Corporis maxime asperiores, itaque adipisci repudiandae quis hic quaerat?
          </Text>
        </section>
      </div>
    </Card>
  )
}