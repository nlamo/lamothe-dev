
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

export default function Main() {
  const style = {
    background: 'var(--mantine-color-red-9)'
  }

  return (
    <main style={style}>
      <Header/>
      <Container/>
      <Footer/>
    </main>
  )
}