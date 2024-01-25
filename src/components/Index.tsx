import { FC, useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const Index: FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section')    

    for (const section of sections) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 0 && rect.bottom > 0) {
        setActiveSection(section.id)
        break
      }
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className='px-4 md:px-6 lg:h-screen lg:sticky lg:top-0 lg:py-16'> 
      <p>Hi there 👋, my name is</p>
      <h1 className='text-[2.5rem] md:text-5xl font-bold text-zinc-200'>Desmond Afari</h1>
      <h3 className='md:mt-2 text-lg leading-[1rem] md:text-xl font-medium text-zinc-200'>Machine Learning Engineer</h3>
      <p className='mt-4 lg:max-w-[27rem] xl:max-w-lg'>I harness the power of data and cutting-edge algorithms to develop solutions.</p>
      <div className='py-16 hidden lg:block'>
        <ul className='text-sm space-y-3'>
          <li className='cursor-pointer w-fit'>
            <Link to="about" smooth={true} duration={500} className={activeSection === 'about' ? 'active': 'inactive'}>
              <div></div>
              <p className='font-bold'>ABOUT</p>
            </Link>
          </li>
          <li className='cursor-pointer w-fit'>
            <Link to="projects" smooth={true} duration={500} className={activeSection === 'projects' ? 'active': 'inactive'}>
              <div></div>
              <p className='font-bold'>PROJECTS</p>
            </Link>
          </li>
          <li className='cursor-pointer w-fit'>
            <Link to="education" smooth={true} duration={500} className={activeSection === 'education' ? 'active': 'inactive'}>
              <div></div>
              <p className='font-bold'>EDUCATION</p>
            </Link>
          </li>
          <li className='cursor-pointer w-fit'>
            <Link to="technologies" smooth={true} duration={500} className={activeSection === 'technologies' ? 'active': 'inactive'}>
              <div></div>
              <p className='font-bold'>TECHNOLOGIES</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className='flex items-center gap-x-5 mt-16 lg:mt-0'>
        <span>
          <a href="https://github.com/des-afari"  rel='noopener noreferrer' target='_blank'>
            <svg role="img" className='w-6 h-6 fill-zinc-500 hover:fill-zinc-200 transition-colors' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/desmond-afari"  rel='noopener noreferrer' target='_blank'>
            <svg role="img" className='w-6 h-6 fill-zinc-500 hover:fill-zinc-200 transition-colors' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </span>
        <span>
          <a href="mailto:afaridesmond@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='stroke-zinc-500 hover:stroke-zinc-200 transition-all fill-zinc-900' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>Email me</title><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
          </a>
        </span>
        <span className='ml-6'>
          <a href="https://desmondafari.com/downloads/Desmond_Afari_Resume.pdf" download rel='noreferrer'>
            <button className='flex items-center bg-zinc-700 px-3 py-1 rounded-full border border-zinc-500 hover:bg-zinc-700/70 transition-colors'>
              Résumé
              <svg width="16" height="16" className='mt-1' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </button>
          </a>
        </span>
      </div>
    </section>
  )
}

export default Index