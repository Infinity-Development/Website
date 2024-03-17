import { FC, useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import infinitybots from '../../public/infinitybots.png'
import diswidgets from '../../public/diswidgets.png'
import metroreviews from '../../public/metro.png'
import linkcord from '../../public/linkcord.png'
import tweeter from '../../public/tweeter.png'
import dscjobs from '../../public/dscjobs.png'
import devhub from '../../public/devhub.png'
import modhub from '../../public/modhub.png'
import toxmod from '../../public/toxmod.png'

interface Project {
  img: StaticImageData;
  title: string;
  resume: string;
  url: string;
  source: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <section id="projects" className="text-white sm:min-h-0 h-auto pt-28 sm:pt-32 sm:w-10/12">
        <h2 className="uppercase text-xl mb-6 sm:text-2xl md:text-3xl lg:text-4xl">Our Projects</h2>
        <hr className="mb-6 border-gray-300" />
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-img relative overflow-hidden max-w-xl sm:w-96 sm:h-52 md:w-10/12 md:max-w-md lg:h-52 lg:max-w-xl lg:w-full"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.img}
                  alt={project.title}
                  layout="responsive"
                  width={196}
                  height={152}
                  objectFit="cover"
                  className={`transition-transform duration-300 transform ${hoveredProject === index ? 'scale-110' : ''}`}
                />
              </div>
              <div
                className={`project-info absolute top-0 w-full h-full text-sm px-6 flex flex-col justify-center flex flex-col sm:text-base md:px-10 slide-down ${hoveredProject === index ? 'show-details' : ''}`}
              >
                <p className="text-lg sm:text-xl">{project.title}</p>
                <p className="italic">{project.resume}</p>
                <div className="flex justify-between mt-8">
                  <button className="border p-1 rounded w-16 hover:bg-white hover:text-black sm:w-20">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">View</a>
                  </button>
                  <button className="hover:underline">
                    <a href={project.source} target="_blank" rel="noopener noreferrer">Source</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;


const projectsData: Project[] =  [
  {
    img: infinitybots,
    title: 'Infinity Bot List',
    resume:
      'Search our vast list of bots for an exciting start to your Discord Server.',
    url: 'https://infinitybots.gg',
    source: 'https://github.com/InfinityBotList',
  },
  {
    img: metroreviews,
    title: 'Metro Reviews',
    resume:
      'The Dedicated Community of Discord Bot Lists made by Discord Bot Lists.',
    url: 'https://metrobots.xyz',
    source: 'https://github.com/MetroReviews/Website',
  },
  {
    img: diswidgets,
    title: 'DisWidgets',
    resume:
      'Looking for new ways to Showcase your Discord Server? We offer a Free, Stylish and Simple Solution',
    url: 'https://beta.diswidgets.org',
    source: 'https://beta.diswidgets.org/discord',
  },
  {
    img: linkcord,
    title: 'Link Cord',
    resume:
      'Create your custom Profile Page add your Social Media Links and share it for the world to see.',
    url: 'https://linkcord.bio',
    source: 'https://github.com/LinkCordApp',
  },
  {
    img: dscjobs,
    title: 'JobCord',
    resume: 'Find the best Moderators & Developers for your servers!',
    url: 'https://beta.jobcord.co',
    source: 'https://github.com/DscJobs',
  },
  {
    img: devhub,
    title: 'Dev Hub',
    resume:
      'The information sharing community made for developers and programmers alike.',
    url: 'https://devhub.life',
    source: 'https://discord.com/invite/6pRxaNeRX8',
  },
  {
    img: modhub,
    title: 'Mod Hub',
    resume: 'Find the best Moderators & Developers for your servers!',
    url: 'https://modhub.gg',
    source: 'https://github.com/ModHub-gg',
  },
  {
    img: tweeter,
    title: 'Tweeter',
    resume:
      'The Number one Open-Source Discord Bot for Twitter Notification Streaming and Monitors.',
    url: 'https://tweeterbot.xyz/',
    source: 'https://github.com/TheRealToxicDev/Tweeter',
  },
  {
    img: toxmod,
    title: 'Tox Mod',
    resume: 'The Open-Source Discord Bot with a little bit of Attitude.',
    url: 'https://toxmod.xyz/',
    source: 'https://github.com/Tox-Mod/ToxModBot',
  },
];

export { Projects, projectsData };
