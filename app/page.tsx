import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaMediumM, FaFilePdf } from 'react-icons/fa';

import IconLink from './ui/social-media-linnk';

export default function Home() {
  return (
    <div className='flex justify-center gap-x-14'>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-col gap-y-5'>
          <div className='text-center text-8xl'>Payam</div>
          <div className='text-8xl'>Yektamaram</div>
        </div>
        <div className='mt-10 flex flex-col gap-y-5'>
          <span className='text-center text-4xl'>
            Full-stack Developer @ MPAC
          </span>
          <span className='text-center text-3xl italic'>
            University of Toronto Graduate
          </span>
          <div className='flex justify-center gap-x-5'>
            <IconLink
              link='https://github.com/payamyek'
              icon={<FaGithub size={35} />}
            />
            <IconLink
              link='https://medium.com/@thelostobserver'
              icon={<FaMediumM size={35} />}
            />
            <IconLink
              link='https://www.linkedin.com/in/payamyek/'
              icon={<FaLinkedinIn size={35} />}
            />
            <IconLink
              link='https://cdn.jsdelivr.net/gh/payamyek/career@main/resume/resume.pdf'
              icon={<FaFilePdf size={35} />}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-2'>
        <Image
          src='/payam.jpg'
          width={400}
          height={900}
          alt='A picture of Payam Yektamaram steering a sail-boat in Squamish, British Columbia.'
          className='rounded-xl shadow-lg shadow-teal-600/30 duration-200 ease-linear hover:scale-105'
        />
        <span className='text-md text-center italic'>
          A happy Payam in the wild ...
        </span>
      </div>
    </div>
  );
}
