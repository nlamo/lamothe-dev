import { Card, Flex, Image, Text } from '@mantine/core'

export default function Images() {
  return (
    <Flex gap='md'>
      <Card className='quote' shadow='lg' padding='lg' radius='md' withBorder>
        <Image src='./img/undraw_firmware_re_fgdy.svg' alt='Firmware' />
        <Text className='quoteText'>
          The human mind is an open network of complex softwares working
          together. - Sukant Ratnakar
        </Text>
      </Card>
      <Card className='quote' shadow='lg' padding='lg' radius='md' withBorder>
        <Image src='./img/undraw_handcrafts_space.svg' alt='Space' />
        <Text className='quoteText'>
          The highest activity a human being can attain is learning for understanding,
          because to understand is to be free. - Spinoza
        </Text>
      </Card>
      <Card className='quote' shadow='lg' padding='lg' radius='md' withBorder>
        <Image src='./img/undraw_dev_productivity_re_fylf.svg' alt='Productivity' />
        <Text className='quoteText'>
          Practice yourself, for heaven&apos;s sake in little things, and then proceed to
          greater. - Epictetus
        </Text>
      </Card>
    </Flex>
  )
}
