import { FC } from 'react'
import blogImage from '../assets/img/blog.png'
import recImage from '../assets/img/movieRec.png'
import pokeImage from '../assets/img/pokebook.png'

const Projects: FC = () => {
  return (
    <section>
      <div className='lg:hidden mt-24'>
        <h2 className='font-extrabold text-zinc-200'>PROJECTS</h2>
      </div>
      <div className='mt-12 lg:mt-24 md:text-lg flex gap-y-12 flex-col'>
        <a href="https://blog.desmondafari.com" target='_blank'>
          <div className='lg:grid lg:grid-cols-4 lg:gap-x-3 space-y-2 lg:space-y-0 px-3 py-4 lg:py-6 bg-zinc-800 border border-b-0 border-zinc-700'>
            <img src={blogImage} className='col-span-1 w-[55%] lg:w-full lg:mt-1' alt="blog project image" />
            <div className='col-span-3 pt-2 lg:pt-0 lg:space-y-1'>
              <h3 className='text-zinc-200 font-semibold text-lg lg:text-xl lg:font-bold'>Personal Blog</h3>
              <p className='lg:text-base'>Application that allows me to teach whilst getting a better understand on interesting topics.</p>
            </div>
          </div>
          <div className='text-xs p-3 flex gap-2 flex-wrap bg-zinc-800 border border-t-0 border-zinc-700'>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>FastAPI</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>SQLAlchemy</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>React</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>TailwindCSS</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>Axios</span>
          </div>
        </a> 
        <a href="https://desmonda-movie-recommendation-system.hf.space/" target='_blank'>
          <div className='lg:grid lg:grid-cols-4 lg:gap-x-3 space-y-2 lg:space-y-0 px-3 py-4 lg:py-6 bg-zinc-800 border border-b-0 border-zinc-700'>
            <img src={recImage} className='col-span-1 w-[55%] lg:w-full lg:mt-1' alt="recommender project image" />
            <div className='col-span-3 pt-2 lg:pt-0 lg:space-y-1'>
              <h1 className='text-zinc-200 font-semibold text-lg lg:text-xl lg:font-bold'>Movie Recommendation App</h1>
              <p className='lg:text-base'>Recommends ten movies you might be interested in watching based on your favorite movie.</p>
            </div>
          </div>
          <div className='text-xs p-3 flex gap-2 flex-wrap bg-zinc-800 border border-t-0 border-zinc-700'>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>Streamlit</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>Pickle</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>Scikit Learn</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>K Nearest Neighbor</span>
          </div>       
        </a> 
        <a href="https://pokebook-delta.vercel.app/" target='_blank'>
          <div className='lg:grid lg:grid-cols-4 lg:gap-x-3 space-y-2 lg:space-y-0 px-3 py-4 lg:py-6 bg-zinc-800 border border-b-0 border-zinc-700'>
            <img src={pokeImage} className='col-span-1 w-[55%] lg:w-full lg:mt-1' alt="pokebook project image" />
            <div className='col-span-3 pt-2 lg:pt-0 lg:space-y-1'>
              <h3 className='text-zinc-200 font-semibold text-lg lg:text-xl lg:font-bold'>Pokebook</h3>
              <p className='lg:text-base'>A list of all pokemons, their strengths and weaknesses, and their stats.</p>
            </div>
          </div>
          <div className='text-xs p-3 flex gap-2 flex-wrap bg-zinc-800 border border-t-0 border-zinc-700'>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>React</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>Axios</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>React Paginate</span>
            <span className='items-center rounded-md border border-zinc-500 px-2.5 py-0.5 text-xs font-semibold'>React Router DOM</span>
          </div>              
        </a>      
      </div>
    </section>
  )
}

export default Projects