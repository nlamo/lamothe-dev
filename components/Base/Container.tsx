import Header from './Header';
import Images from './sections/Images';
import Overview from './sections/Overview';
import Projects from './sections/Projects';

export default function Container() {
  return (
    <div className='section-container'>
      <Header></Header>
      <Images></Images>
      <Overview></Overview>
      <Projects></Projects>
    </div>
  )
}