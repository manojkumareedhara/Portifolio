import { FaPython, FaPhp, FaJsSquare, FaNodeJs, FaReact, FaDocker, FaGitAlt, FaAws, FaGoogle, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiC, SiDart, SiMongodb, SiScikitlearn, SiSpacy, SiPytorch, SiFastapi, SiHuggingface, SiDjango, SiFlask, SiKubernetes, SiMysql, SiApacheairflow } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';
import { FaDatabase } from 'react-icons/fa';
import { RiRobotLine } from 'react-icons/ri';
import { SectionWrapper } from '../hoc';

const Tech = () => {
  const skills = [
    { icon: <SiCplusplus className='text-7xl text-blue-600' />, label: 'C++' },
    { icon: <SiC className='text-7xl text-blue-600' />, label: 'C' },
    { icon: <FaPython className='text-7xl text-blue-300' />, label: 'Python' },
    { icon: <FaPhp className='text-7xl text-indigo-600' />, label: 'PHP' },
    { icon: <FaJsSquare className='text-7xl text-yellow-400' />, label: 'JavaScript' },
    { icon: <FaDatabase className='text-7xl text-blue-700' />, label: 'SQL' },
    { icon: <SiDart className='text-7xl text-blue-400' />, label: 'Dart' },
    { icon: <SiScikitlearn className='text-7xl text-orange-400' />, label: 'Scikit-learn' },
    { icon: <SiSpacy className='text-7xl text-purple-400' />, label: 'SpaCy' },
    { icon: <SiPytorch className='text-7xl text-red-600' />, label: 'PyTorch' },
    { icon: <SiFastapi className='text-7xl text-green-400' />, label: 'Fastai' },
    { icon: <SiHuggingface className='text-7xl text-yellow-500' />, label: 'HuggingFace' },
    { icon: <SiDjango className='text-7xl text-green-700' />, label: 'Django' },
    { icon: <SiFlask className='text-7xl text-white' />, label: 'Flask' },
    { icon: <FaNodeJs className='text-7xl text-green-500' />, label: 'Node.js' },
    { icon: <FaReact className='text-7xl text-cyan-400' />, label: 'ReactJS' },
    { icon: <SiKubernetes className='text-7xl text-blue-600' />, label: 'Kubernetes' },
    { icon: <FaDocker className='text-7xl text-blue-500' />, label: 'Docker' },
    { icon: <FaGitAlt className='text-7xl text-orange-600' />, label: 'GIT' },
    { icon: <GrMysql className='text-7xl text-blue-700' />, label: 'MySQL' },
    { icon: <FaLinux className='text-7xl text-yellow-500' />, label: 'Linux' },
    { icon: <FaAws className='text-7xl text-yellow-500' />, label: 'AWS' },
    { icon: <FaGoogle className='text-7xl text-blue-500' />, label: 'GCP' },
    { icon: <RiRobotLine className='text-7xl text-green-400' />, label: 'ROS' },
    { icon: <SiApacheairflow className='text-7xl text-red-500' />, label: 'Apache Airflow' },
  ];

  return (
       <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>
        Technologies
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-5'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 shadow-lg transform transition-transform hover:translate-y-[-5px] hover:shadow-2xl'
            style={{
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            {skill.icon}
            <p className='mt-2 text-center text-lg'>{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech,'');
