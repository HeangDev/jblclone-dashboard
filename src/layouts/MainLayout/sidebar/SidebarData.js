export const SidebarData = [
    {
        title: "หน้าแรก",
        path: "/dashboard",
        icon: <i className="bi bi-speedometer2"></i>,
    },
    {
        title: "ลูกค้า",
        path: "/customer",
        icon: <i className="bi bi-person-vcard"></i>,
        iconClosed: <i className="bi bi-chevron-right sa-menu-arrow"></i>,
        iconOpened: <i className="bi bi-chevron-down sa-menu-arrow"></i>,
        subNav: [
            {
                title: "ข้อมูลลูกค้า",
                path: "/customer",
            },
            {
                title: "เงินฝาก",
                path: "/deposit",
            },
            {
                title: "เบิกเงิน",
                path: "/withdraw",
            }
        ]
    },
    {
        title: "ผู้ใช้",
        path: "/user",
        icon: <i className="bi bi-person"></i>,
    },
    {
        title: "รายงาน",
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
    },
]