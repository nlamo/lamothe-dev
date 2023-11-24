export default function Thoughts() {
  return (
    <div id='thoughts-section' className='section-container'>
      <section className='thoughts' v-bind:class='{ sectionDark: darkMode }'>
        <h3 className='animated-header-text'>Thoughts</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolores debitis laboriosam dolorum similique reiciendis deserunt voluptates incidunt adipisci, quidem est sed voluptatem provident exercitationem suscipit quod non. Aut, recusandae deleniti? Corporis maxime asperiores, itaque adipisci repudiandae quis hic quaerat?
        </p>
      </section>
    </div>
  )
}