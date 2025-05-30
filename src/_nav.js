import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilPencil,
  cilSpeedometer,
  cilStar,
  cilGroup,
  cilUserPlus,  
  cilMemory,  
  cilContact,
  cilCalendar,
  cilDescription,
  cilBarChart,
  cilUser
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'DashBoard',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />, 
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavTitle,
    name: 'Pages',
  },
  {
    component: CNavItem,
    name: 'Manage Users',
    to: '/dashboard/manage_users',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />, 
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Create User',
    to: '/dashboard/create_user',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Manage Hardware',
    to: '/dashboard/manage_hardware',
    icon: <CIcon icon={cilMemory} customClassName="nav-icon" />, 
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Analytics',
    to: '/dashboard/Analytics',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />, 
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Invoices',
    to: '/dashboard/invoices',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />, 
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'User Details',
    to: '/dashboard/UserDetails',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />, 
    badge: {
      color: 'info',
    },
  },




  //   {
  //   component: CNavItem,
  //   name: 'DashBoard',
  //   to: '/dashboard/SuperAdminDashboard',
  //   icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />, 
  //   badge: {
  //     color: 'info',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Pages',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Manage Admin',
  //   to: '/dashboard/ManageAdmin',
  //   icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />, 
  //   badge: {
  //     color: 'info',
  //   },
  // },
  // {
  //   component: CNavItem,
  //   name: 'Manage Gateway',
  //   to: '/dashboard/manage_gateway',
  //   icon: <CIcon icon={cilMemory} customClassName="nav-icon" />, 
  //   badge: {
  //     color: 'info',
  //   },
  // },
  // {
  //   component: CNavItem,
  //   name: 'Invoices',
  //   to: '/dashboard/invoices',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />, 
  //   badge: {
  //     color: 'info',
  //   },
  // },
  // {
  //   component: CNavItem,
  //   name: 'Notification',
  //   to: '/dashboard/notification',
  //   icon: <CIcon icon={cilMemory} customClassName="nav-icon" />, 
  //   badge: {
  //     color: 'info',
  //   },
  // },


]

export default _nav
