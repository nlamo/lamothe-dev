import Header from './Header';
import Images from '../Sections/Images';
import Overview from '../Sections/Overview';
import Projects from '../Sections/Projects';

export default function ContentContainer() {
  return (
    <div className='section-container'>
      <Header></Header>
      <Images></Images>
      <Overview></Overview>
      <Projects></Projects>
    </div>
  )
}