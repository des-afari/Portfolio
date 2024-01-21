import { FC } from 'react'

const About: FC = () => {
  return (
    <section id='about' className='lg:pt-16'>
      <header className='sticky top-0 px-4 md:px-6 lg:hidden flex items-center mt-20 h-12 bg-zinc-900/75 backdrop-blur'>
        <h2 className='font-extrabold text-zinc-200'>ABOUT</h2>
      </header>
      <div className='px-4 md:px-6 mt-8 lg:mt-0 md:text-lg'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eum vero perferendis nihil accusantium maiores? Et possimus tenetur veniam repellendus perspiciatis ea dolor, praesentium asperiores iste cumque, quos soluta neque?</p>
        <p className='mt-4'>My expertise lies in building machine learning models, and I specialize in utilizing <span className='text-zinc-200'>Natural Language Processing</span> (NLP), <span className='text-zinc-200'>Neural Networks</span> (NN), and <span className='text-zinc-200'>Convolutional Neural Networks</span> (CNN) to address various challenges.</p>
        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eum vero perferendis nihil accusantium maiores? Et possimus tenetur veniam repellendus perspiciatis ea dolor, praesentium asperiores iste cumque, quos soluta neque?</p>
      </div>
    </section>
  )
}

export default About