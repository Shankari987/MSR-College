const menu_data = [
  
  {
    title: "Our Courses",
    link: "/MSR/Course",
    mega_menu: false,
    single_menu: true,
  },
  {
    title: "Hospital Tie-ups",
    link: "/",
    mega_menu: false,
    single_menu: true,
  },
  {
    title: "Our Institutions",
    link: "/",
    mega_menu: true,
    single_menu: false,
    submenus: [
      {
        title: "Engineering",
        link: "https://engineering.shanmugha.edu.in/",
        icon: true,
        icon_name: "safety_divider_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Pharmacy",
        link: "https://shanmughapharmacy.edu.in/",
        icon: true,
        icon_name: "vaccines_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Nursing for women",
        link: "https://shanmughanursing.edu.in/",
        icon: true,
        icon_name: "health_and_safety_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Allied Health Science",
        icon: true,
        icon_name: "medical_information_black_48dp.svg",
        link: "/",
        mega_submenu: [],
      },
        {
        title: "Medical Science & research",
        icon: true,
        icon_name: "biotech_black_48dp.svg",
        link: "https://msr-college.onrender.com",
        mega_submenu: [],
      },

    ],
  },
  {
    title: "Departments",
    link: "/",
    single_menu: false,
    submenus: [
      {
        title: "Cardiac Technology",
        link: "/MSR/course/Cardiac_Technology",
        icon: true,
        icon_name: "safety_divider_black_48dp.svg",
      },
      {
        title: " B.Optometry",
        icon: true,
        icon_name: "biotech_black_48dp.svg",
        link: "/MSR/course/Optometry",
      },
      {
        title: "Operation theatre and Anesthesia technology",
        link: "/MSR/course/OTAT",
        icon: true,
        icon_name: "safety_divider_black_48dp.svg",
      },
      {
        title: "Radiography and imaging Technology",
        icon: true,
        icon_name: "biotech_black_48dp.svg",
        link: "/MSR/course/Radiology_Technology",
      },
      {
        title: "Medical Laboratory Technology",
        icon: true,
        icon_name: "biotech_black_48dp.svg",
        link: "/MSR/course/Laboratory",
      },
      {
        title: " Cardio Pulmonary Perfusion Care Technology",
        icon: true,
        icon_name: "biotech_black_48dp.svg",
        link: "/MSR/course/Cardio_care",
      },
    ],
  },
  {
    title: "Facilities",
    link: "/MSR/Facilities",
    mega_menu: false,
    single_menu: true,
  },
    {
    title: "Contact Us",
    link: "/MSR/Contact",
    mega_menu: false,
    single_menu: true,
  },
    
];

export default menu_data;
