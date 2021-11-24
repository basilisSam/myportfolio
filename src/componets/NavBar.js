import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className='bg-black'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName='text-white'
            className='inflex-flex items-center py-6 px-3 mr-4 text-red-100  text-4xl font-bold cursive tracking-widest'
          >
            Sam
          </NavLink>
          <NavLink
            to='/about'
            className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-100  '
            activeClassName='text-red-100 bg-red-700'
          >
            About Me
          </NavLink>

          <NavLink
            to='/project'
            className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-100  '
            activeClassName='text-red-100 bg-red-700'
          >
            Projects
          </NavLink>
          <NavLink
            to='/post'
            className='inflex-flex items-center py-3 px-3 my-6 rounded text-red-100  '
            activeClassName='text-red-100 bg-red-700'
          >
            Blog Posts
          </NavLink>
        </nav>
        <div className='inflex-flex  py-3 px-3 my-6'>
          <SocialIcon
            url='https://www.linkedin.com/in/vasilis-samoladas-a59161226/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://github.com/basilisSam/'
            className='mr-4'
            target='_blank'
            fgColor='#000000'
            bgColor='#FFFFFF'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.instagram.com/vasilis_sam_/?hl=el'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            bgColor='#E84D4F'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
