import { ThemeContext } from '@emotion/react'
import { patch } from '@mui/material'
import { element } from 'prop-types'
import React from 'react'
// import AnimatedSVGEdge from './views/dashboard/animatedSVGEdge'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard.js'))








const routes = [

  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/dashboard/manage_users', name: 'Manage Users', element: ManageUsers },
  { path: '/dashboard/create_user' , name: 'Create User', element: CreateUser},
  { path: '/dashboard/manage_hardware' , name: 'Manage Hardware', element: ManageHardware},
  { path: '/dashboard/invoices' , name: 'Contact', element: Invoices},
  { path: '/dashboard/UserDetails' , name: 'Contact', element: UserDetails },
  { path: '/dashboard/Analytics' , name: 'Analytics', element: Analytics},
  { path: '/dashboard/project_manager' , name: 'Project Manager', element: ProjectManager},
  { path: '/dashboard/projectchart/:gateway_name/:value_name' , name: 'Project Chart', element: ProjectChart},
  { path: '/dashboard/highchart' , name: 'Highchart', element: HighChart},
  { path: '/dashboard/animatedSVGEdge', name: 'AnimatedSVGEdge', element : <AnimatedSVGEdge />},
  { path: '/dashboard/secondAnimatedSVGEdge' , name: 'SecondAnimatedSVGEdge', element : SecondAnimatedSVGEdge},
  { path: '/dashboard/CustomNode', name: 'CustomNode', element : CustomNode},
  { path: '/dashboard/SecondCustomNode', name: 'SecondCustomNode', element: SecondCustomNode},
  { path: '/dashboard/GuageMeter', name: 'GuageMeter', element: GuageMeter},
  { path: '/dashboard/PieChart' , name: 'PieChart' , element: PieChart},
  { path: '/dashboard/DeployGateway' , name: 'DeployGateway' , element: DeployGateway},
  { path: '/dashboard/AddProject' , name: 'AddProject' , element: AddProject},


  




]

export default routes
