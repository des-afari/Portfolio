import { FC } from 'react'
import blogImage from '../assets/img/blog.png'
import recImage from '../assets/img/movieRec.png'
import pokeImage from '../assets/img/pokebook.png'
import { Element } from 'react-scroll'

const Projects: FC = () => {
  return (
    <Element id='projects' name='projects' className='section'>
      <header className='sticky top-0 px-4 md:px-6 lg:opacity-0 flex items-center mt-20 h-12 bg-zinc-900/75 backdrop-blur'>
        <h2 className='font-extrabold text-zinc-200'>PROJECTS</h2>
      </header>
      <div className='mt-8 px-4 md:px-6 flex gap-y-12 flex-col'>
        <a href="https://blog.desmondafari.com" target='_blank'>
          <div className='lg:grid lg:grid-cols-4 lg:gap-x-3 space-y-2 lg:space-y-0 px-3 py-4 lg:py-6 bg-zinc-800 border border-b-0 border-zinc-700'>
            <img src={blogImage} className='col-span-1 w-[55%] lg:w-full lg:mt-1' alt="blog project image" />
            <div className='col-span-3 pt-2 lg:pt-0 lg:space-y-1'>
              <h3 className='text-zinc-200 font-bold text-lg'>Personal Blog</h3>
              <p>Application that allows me to teach whilst getting a better understand on interesting topics.</p>
            </div>
          </div>
          <div className='text-xs p-3 flex gap-2 flex-wrap bg-zinc-800 border border-t-0 border-zinc-700'>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>FastAPI</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>SQLAlchemy</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>React</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>TypeScript</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>TailwindCSS</span>
          </div>
        </a> 
        <a href="https://desmonda-movie-recommendation-system.hf.space/" target='_blank'>
          <div className='lg:grid lg:grid-cols-4 lg:gap-x-3 space-y-2 lg:space-y-0 px-3 py-4 lg:py-6 bg-zinc-800 border border-b-0 border-zinc-700'>
            <img src={recImage} className='col-span-1 w-[55%] lg:w-full lg:mt-1' alt="recommender project image" />
            <div className='col-span-3 pt-2 lg:pt-0 lg:space-y-1'>
              <h1 className='text-zinc-200 font-bold text-lg'>Movie Recommender</h1>
              <p>Recommends ten movies you might be interested in watching based on your favorite movie.</p>
            </div>
          </div>
          <div className='text-xs p-3 flex gap-2 flex-wrap bg-zinc-800 border border-t-0 border-zinc-700'>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>Streamlit</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>Python</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>Scikit Learn</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>K Nearest Neighbor</span>
          </div>       
        </a> 
        <a href="https://pokebook-delta.vercel.app/" target='_blank'>
          <div className='lg:grid lg:grid-cols-4 lg:gap-x-3 space-y-2 lg:space-y-0 px-3 py-4 lg:py-6 bg-zinc-800 border border-b-0 border-zinc-700'>
            <img src={pokeImage} className='col-span-1 w-[55%] lg:w-full lg:mt-1' alt="pokebook project image" />
            <div className='col-span-3 pt-2 lg:pt-0 lg:space-y-1'>
              <h3 className='text-zinc-200 font-bold text-lg'>Pokebook</h3>
              <p>A list of all pokemons, their strengths and weaknesses, and their stats.</p>
            </div>
          </div>
          <div className='text-xs p-3 flex gap-2 flex-wrap bg-zinc-800 border border-t-0 border-zinc-700'>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>React</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>JavaScript</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>HTML</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>SCSS</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>CSS</span>
          </div>              
        </a>      
      </div>
    </Element>
  )
}

export default Projects