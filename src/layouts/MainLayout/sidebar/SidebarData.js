export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <i class="bi bi-speedometer2"></i>,
    },
    {
        title: "Employee",
        path: "/employee",
        icon: <i class="bi bi-people"></i>,
        iconClosed: <i class="bi bi-chevron-right sa-menu-arrow"></i>,
        iconOpened: <i class="bi bi-chevron-down sa-menu-arrow"></i>,
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
        title: "Requests",
        path: "/requests",
        icon: <i class="bi bi-clipboard-check"></i>,
        iconClosed: <i class="bi bi-chevron-right sa-menu-arrow"></i>,
        iconOpened: <i class="bi bi-chevron-down sa-menu-arrow"></i>,
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
        title: "Approval",
        path: "/approval",
        icon: <i class="bi bi-check2-circle"></i>,
        iconClosed: <i class="bi bi-chevron-right sa-menu-arrow"></i>,
        iconOpened: <i class="bi bi-chevron-down sa-menu-arrow"></i>,
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
        icon: <i class="bi bi-database"></i>,
    },
    {
        title: "Position",
        path: "/position",
        icon: <i class="bi bi-diagram-3"></i>,
    },
    {
        title: "Branch",
        path: "/branch",
        icon: <i class="bi bi-building"></i>,
    },
    {
        title: "Calendar",
        path: "/calendar",
        icon: <i class="bi bi-calendar2-date"></i>,
    },
    {
        title: "Assets",
        path: "/assets",
        icon: <i class="bi bi-keyboard"></i>,
        iconClosed: <i class="bi bi-chevron-right sa-menu-arrow"></i>,
        iconOpened: <i class="bi bi-chevron-down sa-menu-arrow"></i>,
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
        icon: <i class="bi bi-clipboard2-data"></i>,
        iconClosed: <i class="bi bi-chevron-right sa-menu-arrow"></i>,
        iconOpened: <i class="bi bi-chevron-down sa-menu-arrow"></i>,
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