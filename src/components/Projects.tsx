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
      <div className='mt-12 lg:mt-0 md:text-lg space-y-12'>
        <div className='lg:grid lg:grid-cols-4 lg:gap-x-3 space-y-2 lg:space-y-0 px-3 py-4 lg:py-6 bg-zinc-800 border border-zinc-700 hover:bg-zinc-800/70 transition-colors'>
          <img src={blogImage} className='col-span-1 w-[55%] lg:w-full lg:mt-1' alt="blog project image" />
          <div className='col-span-3 pt-2 lg:pt-0 lg:space-y-1'>
            <h3 className='text-zinc-200 font-semibold text-lg lg:text-xl lg:font-bold'>Personal Blog</h3>
            <p className='lg:text-base'>Application that allows me to teach whilst getting a better understand on interesting topics.</p>
          </div>
        </div>        
        <div className='lg:grid lg:grid-cols-4 lg:gap-x-3 space-y-2 lg:space-y-0 px-3 py-4 lg:py-6 bg-zinc-800 border border-zinc-700 hover:bg-zinc-800/70 transition-colors'>
          <img src={recImage} className='col-span-1 w-[55%] lg:w-full lg:mt-1' alt="recommender project image" />
          <div className='col-span-3 pt-2 lg:pt-0 lg:space-y-1'>
            <h3 className='text-zinc-200 font-semibold text-lg lg:text-xl lg:font-bold'>Movie Recommendation App</h3>
            <p className='lg:text-base'>Recommends ten movies you might be interested in watching based on your favorite movie.</p>
          </div>
        </div>        
        <div className='lg:grid lg:grid-cols-4 lg:gap-x-3 space-y-2 lg:space-y-0 px-3 py-4 lg:py-6 bg-zinc-800 border border-zinc-700 hover:bg-zinc-800/70 transition-colors'>
          <img src={pokeImage} className='col-span-1 w-[55%] lg:w-full lg:mt-1' alt="pokebook project image" />
          <div className='col-span-3 pt-2 lg:pt-0 lg:space-y-1'>
            <h3 className='text-zinc-200 font-semibold text-lg lg:text-xl lg:font-bold'>PokeBook</h3>
            <p className='lg:text-base'>A list of all pokemons, their strengths and weaknesses and their stats.</p>
          </div>
        </div>        
      </div>
    </section>
  )
}

export default Projects