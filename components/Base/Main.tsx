
import Header from './Header'
import ContentContainer from './ContentContainer'
import Footer from './Footer'

export default function Main() {
  const style = {
    background: 'var(--mantine-color-red-9)'
  }

  return (
    <main style={style}>
      <Header/>
      <ContentContainer/>
      <Footer/>
    </main>
  )
}