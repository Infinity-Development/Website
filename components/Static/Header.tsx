import React, { useState } from 'react'
import {
  FaTwitter,
  FaGithub,
  FaBlogger,
  FaQuestion,
  FaBars,
  FaHome,
  FaProjectDiagram,
  FaDiscord,
} from 'react-icons/fa'

const Header = () => {
  const menu = [
    { icon: <FaHome />, title: 'Home', href: '#home' },
    { icon: <FaQuestion />, title: 'About', href: '#about' },
    { icon: <FaProjectDiagram />, title: 'Projects', href: '#projects' },
    {
      icon: <FaDiscord />,
      title: 'Discord',
      href: 'https://infinitybots.gg/discord',
      target: true,
    },
    {
      icon: <FaTwitter />,
      title: 'Twitter',
      href: 'https://twitter.com/InfinityDevsLLC',
      target: true,
    },
    {
      icon: <FaBlogger />,
      title: 'Blogs',
      href: 'https://infinitybots.gg/blogs',
      target: true,
    },
    {
      icon: <FaGithub />,
      title: 'Github',
      href: 'https://github.com/Infinity-Development',
      target: true,
    },
  ]

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <nav className="w-full sm:w-10/12 flex justify-between items-center fixed top-0 py-7 z-50 max-w-screen-xl sm:max-w-screen-xl sm:w-10/12 sm:flex-col sm:h-auto sm:items-end sm:text-right sm:p-0 sm:bg-transparent right-2">
      {/* PC Menu */}
      <ul className="hidden sm:flex flex-1 justify-between sm:flex-col sm:mt-1">
        <div style={{ marginTop: '150px' }}>
          {menu.map((section, index) => (
            <li
              key={index}
              className="text-white uppercase font-normal text-lg sm:text-xl sm:mt-2 md:text-1xl"
            >
              <a
                href={section.href}
                target={section.target ? '_blank' : ''}
                rel={section.target ? 'noopener noreferrer' : ''}
                className={section.target ? 'resume' : ''}
              >
                <div className="flex items-center justify-center p-1 rounded-md">
                  <div items-left style={{ marginRight: '10px' }}>
                    {section.icon}
                  </div>
                  <span className="mr-2"></span>
                  {section.title}
                </div>
              </a>
            </li>
          ))}
        </div>
      </ul>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div
          className="top-0 left-0 w-full bg-gray-800 z-50"
          style={{ marginBottom: '10px' }}
        >
          <div className="flex justify-between items-center px-4">
            <button onClick={toggleMobileMenu} className="text-white"></button>
          </div>
          <ul className="text-white">
            {menu.map((section, index) => (
              <li
                key={index}
                className="text-white uppercase font-normal text-lg sm:text-xl sm:mt-2 md:text-2xl"
                style={{ marginBottom: '10px' }}
              >
                <a
                  href={section.href}
                  target={section.target ? '_blank' : ''}
                  rel={section.target ? 'noopener noreferrer' : ''}
                  className={section.target ? 'resume' : ''}
                >
                  <div className="flex items-center justify-center p-1 rounded-md">
                    <div items-left>{section.icon}</div>
                    <span className="mr-2"></span>
                    {section.title}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={toggleMobileMenu}
        className="text-white absolute top-0 right-0 mt-3 mr-3 focus:outline-none sm:hidden"
      >
        <FaBars />
      </button>
    </nav>
  )
}

export default Header
