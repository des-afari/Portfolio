import { FC } from 'react'

const Education: FC = () => {
  return (
    <section id='education' className='section'>
      <header className='sticky top-0 px-4 md:px-6 lg:opacity-0 flex items-center mt-20 h-12 bg-zinc-900/75 backdrop-blur'>
        <h2 className='font-extrabold text-zinc-200'>EDUCATION</h2>
      </header>
      <div className='mt-8 px-4 md:px-6 flex gap-y-24 flex-col'>
        <div>
          <p className='text-xs'>DECEMBER 2022 - APRIL 2023</p>
          <h1 className='mt-4 text-zinc-200 text-lg font-semibold'>Data Scientist: Machine Learning</h1>
          <p className='text-sm font-semibold'>CodeCademy</p>
          <p className='mt-4 text-base'><span className='text-zinc-200 font-medium'>Relevant Coursework:</span> Python, SQL, Pandas, Scikit-Learn, Tensorflow, Matplotlib, Statistics, Exploratory Data Analysis, Data Visualization, Supervised Learning, Unsupervised Learning, Feature Engineering, Deep Learning</p>
        </div>
        <div>
          <p className='text-xs'>SEPTEMBER 2022 - OCTOBER 2023</p>
          <h1 className='mt-4 text-zinc-200 text-lg font-semibold'>Software Engineering Program</h1>
          <p className='text-sm font-semibold'>ALX Africa</p>
          <p className='mt-4'><span className='text-zinc-200 font-medium'>Relevant Coursework:</span> Shell, C Programming, Python, SQL, JavaScript, TypeScript, Regular Expressions, Networking, Data Structures, DevOps, HTTPs, API Development, NoSQL, Caching, Authentication, Debugging</p>
        </div>
        <div>
          <p className='text-xs'>JULY 2017 - JULY 2021</p>
          <h1 className='mt-4 text-zinc-200 text-lg font-semibold'>Bsc. Telecommunications Engineering</h1>
          <p className='text-sm font-semibold'>KNUST</p>
          <p className='mt-4'><span className='text-zinc-200 font-medium'>Relevant Coursework:</span>  Algebra, Calculus, C Programming, Differential Equations, Microprocessors, Probability, Statistics, Computer Networking</p>
        </div>
      </div>
    </section>
  )
}

export default Education