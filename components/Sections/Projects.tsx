import { Card, Space, Text, Title } from '@mantine/core'

import classes from './_Sections.module.scss'

export default function Projects() {
  return (
    <Card shadow='lg' padding='lg' radius='md' withBorder>
      <div className='section-container'>
        <section id='projects-section' className='projects'>
          <Title className={classes.animatedHeaderText} order={3}>Projects</Title>
          <Space h='md' />
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis aliquid nesciunt eius laboriosam voluptate tenetur sit non amet asperiores ex quos eligendi nisi facere voluptatibus, quidem culpa exercitationem, quasi nobis in! Et dolore quis aliquid quod tempore reiciendis non? Vero!
          </Text>
        </section>
      </div>
    </Card>
  )
}
