import { FC } from 'react'
import { Element } from 'react-scroll'

const About: FC = () => {
  return (
    <Element id='about' name='about' className='section lg:pt-16'>
      <header className='sticky top-0 px-4 sm:px-12 md:px-6 lg:hidden flex items-center mt-20 h-12 bg-zinc-900/75 backdrop-blur'>
        <h2 className='font-extrabold text-zinc-200'>ABOUT</h2>
      </header>
      <div className='px-4 sm:px-12 md:px-6 mt-8 lg:mt-0 md:text-lg'>
        <p>I am a passionate <span className='text-zinc-200'>full-stack developer</span> with a knack for crafting innovative digital solutions. With expertise in both <span className='text-zinc-200'>front-end</span> and <span className='text-zinc-200'>back-end</span> technologies, I thrive in bringing ideas to life through <span className='text-zinc-200'>clean code</span> and <span className='text-zinc-200'>intuitive user experiences</span>. Whether it's building dynamic web applications or designing seamless interfaces, I'm dedicated to delivering <span className='text-zinc-200'>high-quality solutions</span> that exceed expectations.</p>
        <p className='mt-4'>In addition to my core competencies, I also specialise in <span className='text-zinc-200'>data science</span>. This proficiency enables me to uncover <span className='text-zinc-200'>patterns</span>, <span className='text-zinc-200'>trends</span>, and <span className='text-zinc-200'>correlations</span> that drive strategic decision-making and enhance organizational performance. Explore my portfolio to see how I can contribute to your project.</p>
      </div>
    </Element>
  )
}

export default About