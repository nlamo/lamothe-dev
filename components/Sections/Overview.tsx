export default function Overview() {
  return (
    <>
      <div id='overview-section' className='section-container'>
        <section className='overview-1'>
          <h3 className='animated-header-text'>Overview</h3>
          <div className='text-container'>
            <p>
              Greetings! My name is Nicholas, and I am a web developer. I work in any number of languages or frameworks, contingent upon the shifting sands of time - or the needs of the employer.
            </p>
            <p>
              Shall this be a lorem? Will I partake in loremification? Ready, set... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore saepe voluptatum eius, animi exercitationem dolorem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum explicabo iure nemo suscipit magnam, accusamus sit recusandae excepturi neque?
            </p>
          </div>
        </section>
      </div>
      <div id='overview-section-2' className='section-container'>
        <section className='overview-2'>
          <p>
            My enthusiasm for computer technology started at a young age - from troubleshooting issues in MS-DOS with my father to using the terminal of a Commodore 64 for the first time in one of the school portables. This developed concurrently with my obsession with computer gaming, which sparked an interest in hardware and building desktop computers.

            During university, my focus was philosophy and literature, with a special interest in philosophy of mind, ethics, and modernism. Years later, by way of literary insight, I began programming.
            
            My experience has been primarily with the LAMP stack, with a healthy balance of front-end (CSS/Sass/JS/jQuery/React) and back-end (PHP/MySQL).
            
            Recreationally, I like to spend my time enagaged with film, literature, illustration, music, gaming, and cycling.

            <span className='highlight-selection-container'>
              You can find my resume <a href='resume/nicholas-lamothe-resume.pdf' target='_blank'>here</a>.
              <img className='highlight-selection' src='./img/highlight-selection.png' alt='' />
            </span>
          </p>
        </section>
      </div>
    </>
  )
}