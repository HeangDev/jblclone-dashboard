export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <i className="bi bi-speedometer2"></i>,
    },
    {
        title: "Employee",
        path: "/employee",
        icon: <i className="bi bi-people"></i>,
        iconClosed: <i className="bi bi-chevron-right sa-menu-arrow"></i>,
        iconOpened: <i className="bi bi-chevron-down sa-menu-arrow"></i>,
        subNav: [
            {
                title: "List",
                path: "/employee",
            },
            {
                title: "Create",
                path: "/employee/create",
            },
            {
                title: "Attendance",
                path: "/employee/create",
            }
        ]
    },
    {
        title: "Leave Requests",
        icon: <i className="bi bi-clipboard-check"></i>,
        iconClosed: <i className="bi bi-chevron-right sa-menu-arrow"></i>,
        iconOpened: <i className="bi bi-chevron-down sa-menu-arrow"></i>,
        subNav: [
            {
                title: "My summary",
                path: "/employee",
            },
            {
                title: "Request a leave",
                path: "/employee/create",
            },
            {
                title: "List of leave requests",
                path: "/employee/create",
            }
        ]
    },
    {
        title: "Overtime",
        icon: <i className="bi bi-pc-display-horizontal"></i>,
        iconClosed: <i className="bi bi-chevron-right sa-menu-arrow"></i>,
        iconOpened: <i className="bi bi-chevron-down sa-menu-arrow"></i>,
        subNav: [
            {
                title: "Request a overtime",
                path: "/overtime/create",
            },
            {
                title: "List of overtime",
                path: "/overtime/list",
            }
        ]
    },
    {
        title: "Approval",
        path: "/approval",
        icon: <i className="bi bi-check2-circle"></i>,
        iconClosed: <i className="bi bi-chevron-right sa-menu-arrow"></i>,
        iconOpened: <i className="bi bi-chevron-down sa-menu-arrow"></i>,
        subNav: [
            {
                title: "Leaves",
                path: "/leaves",
            },
            {
                title: "Overtime",
                path: "/overtime",
            }
        ]
    },
    {
        title: "Department",
        path: "/department",
        icon: <i className="bi bi-database"></i>,
    },
    {
        title: "Position",
        path: "/position",
        icon: <i className="bi bi-diagram-3"></i>,
    },
    {
        title: "Branch",
        path: "/branch",
        icon: <i className="bi bi-building"></i>,
    },
    {
        title: "Calendar",
        path: "/calendar",
        icon: <i className="bi bi-calendar2-date"></i>,
    },
    {
        title: "Assets",
        path: "/assets",
        icon: <i className="bi bi-keyboard"></i>,
        iconClosed: <i className="bi bi-chevron-right sa-menu-arrow"></i>,
        iconOpened: <i className="bi bi-chevron-down sa-menu-arrow"></i>,
        subNav: [
            {
                title: "Attendance",
                path: "/department",
            },
            {
                title: "Leave",
                path: "/department/create",
            }
        ]
    },
    {
        title: "Report",
        path: "/report",
        icon: <i className="bi bi-clipboard2-data"></i>,
        iconClosed: <i className="bi bi-chevron-right sa-menu-arrow"></i>,
        iconOpened: <i className="bi bi-chevron-down sa-menu-arrow"></i>,
        subNav: [
            {
                title: "Attendance",
                path: "/department",
            },
            {
                title: "Leave",
                path: "/department/create",
            },
            {
                title: "Overtime",
                path: "/department/create",
            }
        ]
    }
]