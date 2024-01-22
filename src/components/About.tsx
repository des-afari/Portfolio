import { FC } from 'react'
import { Element } from 'react-scroll'

const About: FC = () => {
  return (
    <Element id='about' name='about' className='section lg:pt-16'>
      <header className='sticky top-0 px-4 md:px-6 lg:hidden flex items-center mt-20 h-12 bg-zinc-900/75 backdrop-blur'>
        <h2 className='font-extrabold text-zinc-200'>ABOUT</h2>
      </header>
      <div className='px-4 md:px-6 mt-8 lg:mt-0 md:text-lg'>
        <p>I am a <span className='text-zinc-200'>machine learning</span> and <span className='text-zinc-200'>software engineer</span> with a over 5 years of experience. My journey began as a software engineer, where I honed my skills in <span className='text-zinc-200'>TypeScript</span>, <span className='text-zinc-200'>React</span>, <span className='text-zinc-200'>Python</span> and <span className='text-zinc-200'>FastAPI</span>. Recently, I took an exciting leap into the captivating world of <span className='text-zinc-200'>machine learning</span>,  directing my focus towards <span className='text-zinc-200'>PyTorch</span>. I also have a keen understanding of techniques such as <span className='text-zinc-200'>deep learning</span> and <span className='text-zinc-200'>natural language processing</span>.</p>
        <p className='mt-4'>Beyond my core competencies, I am well-versed in <span className='text-zinc-200'>Data Science</span>. This includes <span className='text-zinc-200'>Feature Engineering</span>, <span className='text-zinc-200'>Exploratory Data Analysis</span> and <span className='text-zinc-200'>Data Visualization</span>. These skills enhance my ability to create end-to-end solutions.</p>
      </div>
    </Element>
  )
}

export default About