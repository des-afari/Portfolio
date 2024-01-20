import { FC } from 'react'

const Header: FC = () => {
  return (
    <header className='sticky top-0 h-16 px-4 md:px-6 border-b border-zinc-800 flex items-center justify-between'>
      <div>
        <a href="/">
          <p className='comforter text-zinc-200 text-3xl'>desmond afari</p>
        </a>
      </div>
      <div className='flex gap-x-4 font-bold'>
        <span className=' text-zinc-200'>Home</span>
        <span className=' '>Projects</span>
        <span className=' '>Blog</span>
      </div>
    </header>
  )
}

export default Header