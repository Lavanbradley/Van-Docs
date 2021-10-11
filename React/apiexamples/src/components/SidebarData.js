import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Search News',
    path: '/newsSearch',
    icon: <FaIcons.FaRegNewspaper />,
    cName: 'nav-text'
  },
  {
    title: 'BreakingBad',
    path: '/breakingBad',
    icon: <FaIcons.FaCannabis />,
    cName: 'nav-text'
  },
  {
    title: 'Giphy Search',
    path: '/Giphy',
    icon: <FaIcons.FaFlushed />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];