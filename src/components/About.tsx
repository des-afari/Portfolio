import { FC } from 'react'

const About: FC = () => {
  return (
    <section className='lg:py-16'>
      <div className='lg:hidden mt-24'>
        <h2 className='font-extrabold text-zinc-200'>ABOUT</h2>
      </div>
      <div className='mt-12 lg:mt-0 md:text-lg'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eum vero perferendis nihil accusantium maiores? Et possimus tenetur veniam repellendus perspiciatis ea dolor, praesentium asperiores iste cumque, quos soluta neque?</p>
        <p className='mt-4'>My expertise lies in building machine learning models, and I specialize in utilizing <span className='text-zinc-200'>Natural Language Processing</span> (NLP), <span className='text-zinc-200'>Neural Networks</span> (NN), and <span className='text-zinc-200'>Convolutional Neural Networks</span> (CNN) to address various challenges.</p>
      </div>
    </section>
  )
}

export default About