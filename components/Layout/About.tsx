import { useEffect, useRef } from 'react'

const About = () => {
  const animRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (animRef.current) {
      const interval = setInterval(() => {
        if (animRef.current) {
          animRef.current.classList.add('fade')
        }
      }, 80)
      return () => clearInterval(interval)
    }
  }, [])

  const skills = [
    'Javascript',
    'Typescript',
    'Vue.js',
    'React.js',
    'Node.js',
    'Next.js',
    'Express',
    'HTML',
    'CSS',
    'SASS',
    'Bootstrap',
    'jQuery',
    'TailwindCSS',
    'Firebase',
    'Auth0',
    'Next-Auth',
    'Supabase',
    'Clerk',
    'Webpack',
    'MongoDB',
    'RedisDB',
    'Postgres',
    'Python',
    'Figma',
    'CSharp',
    'CPlusPlus',
    'Clang',
    'GoLang',
    'Fastify',
  ]

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <section
        id="about"
        className="text-white sm:min-h-0 h-auto pt-28 sm:pt-32 sm:w-10/12 lg:w-8/12 opacity-0 anim_7"
        ref={animRef}
      >
        <h2 className="uppercase text-xl mb-5 sm:text-2xl md:text-3xl lg:text-4xl">
          About us
        </h2>
        <hr className="mb-6 border-gray-300" />
        <p className="font-light text-lg opacity-60 leading-relaxed sm:text-xl lg:text-2xl sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
          We are a passionate, dedicated, and hard-working development team
          specializing in frameworks such as:
          <span className="font-medium">
            JavaScript, React.js, Vue.js, and Node.js
          </span>
          . We have created and helped with a variety of projects in
          <span className="font-medium">‎ Discord</span> doing anything from
          design to development, debugging, and even event management (Beta
          Releases).
        </p>

        <ul className="flex flex-wrap mt-8">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="text-white mr-3 mt-3 py-1 px-4 md:text-lg lg:text-xl"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default About
