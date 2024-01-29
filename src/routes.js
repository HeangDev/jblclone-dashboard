import { Icon } from '@iconify/react';

import Dashboard from './pages/dashboard'

const routes = [
    {
        type: "collapse",
        name: "Dashboard",
        key: "dashboard",
        icon: <Icon icon="bi:speedometer2" width="24" />,
        route: "/dashboard",
        component: <Dashboard />,
      },
];

export default routes;