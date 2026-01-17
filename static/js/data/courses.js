// Common courses for first and second semester across all departments
const commonFirstSecondSemCourses = {
    "I": [
  "Applied Mathematics - I",
  "Applied Physics",
  "Applied Chemistry",
  "Engineering Mechanics",
  "Basic Electrical & Electronics Engineering",
  "Applied Physics Lab",
  "Applied Chemistry Lab",
  "Engineering Mechanics Lab",
  "Basic Electrical & Electronics Engineering Lab",
  "Professional and Communication Ethics",
  "Engineering Workshop-I",
  "C Programming",
  "Induction cum Universal Human Values"
],

"II": [
  "Applied Mathematics – II",
  "Elective Physics",
  "Elective Chemistry",
  "Engineering Graphics",
  "Program Core Course",
  "Elective Physics Lab",
  "Elective Chemistry Lab",
  "Engineering Graphics Lab",
  "Program Core Lab",
  "Social Science & Community Services",
  "Indian knowledge System",
  "Engineering Workshop-II",
  "Python Programming"
],
};

// Department-specific courses by semester
const coursesByDepartment = {
    "CS": {
        ...commonFirstSecondSemCourses,
        "III": [
            "Engineering Mathematics-III",
            "Discrete Structures and Graph Theory",
            "Data Structure",
            "Digital Logic & Computer Architecture",
            "Computer Graphics",
            "Data Structure Lab",
            "Digital Logic & Computer Architecture Lab",
            "Computer Graphics Lab",
            "Skill Base Lab Course: Object Oriented Programming with Java",
            "Mini Project – 1 A"
        ],
        "IV": [
            "Engineering Mathematics-IV",
            "Analysis of Algorithm",
            "Database Management System",
            "Operating System",
            "Microprocessor",
            "Analysis of Algorithm Lab",
            "Database Management System Lab",
            "Operating System Lab",
            "Microprocessor Lab",
            "Skill Base Lab Course: Python Programming",
            "Mini Project 1-B"
        ],
        "V": [
            "Theoretical Computer Science",
            "Software Engineering",
            "Computer Network",
            "Data Warehousing & Mining",
            "Department Level Optional Course-1",
            "Software Engineering Lab",
            "Computer Network Lab",
            "Data Warehousing & Mining Lab",
            "Business Comm. & Ethics II",
            "Mini Project 2 A"
        ],
        "VI": [
            "System Programming & Compiler Construction",
            "Cryptography & System Security",
            "Mobile Computing",
            "Artificial Intelligence",
            "Department Level Optional Course-2",
            "System Programming & Compiler Construction Lab",
            "Cryptography & System Security Lab",
            "Mobile Computing Lab",
            "Artificial Intelligence Lab",
            "Skill-based Lab Course: Cloud Computing",
            "Mini Project Lab: 2B"
        ]
    },
    
    "MECH": {
        ...commonFirstSecondSemCourses,
        "III": [
            "Engineering Mathematics III",
            "Strength of Materials",
            "Thermodynamics",
            "Production Process I",
            "Material Technology",
            "Strength of Materials Lab",
            "Production Process I Lab",
            "Material Technology Lab",
            "Workshop Practice II",
            "Engineering Graphics & Design II"
        ],
        "IV": [
            "Engineering Mathematics IV",
            "Fluid Mechanics",
            "Theory of Machines I",
            "Production Process II",
            "Heat Transfer",
            "Fluid Mechanics Lab",
            "Theory of Machines I Lab",
            "Production Process II Lab",
            "Heat Transfer Lab",
            "Workshop Practice III"
        ],
        "V": [
            "Dynamics of Machinery",
            "Machine Design I",
            "Industrial Engineering & Management",
            "Mechatronics",
            "Department Level Optional Course I",
            "Dynamics of Machinery Lab",
            "Machine Design I Lab",
            "Mechatronics Lab",
            "Industrial Engineering & Management Lab",
            "Mini Project I"
        ],
        "VI": [
            "Heat and Mass Transfer",
            "Machine Design II",
            "Control Engineering",
            "Department Level Optional Course II",
            "Department Level Optional Course III",
            "Heat and Mass Transfer Lab",
            "Machine Design II Lab",
            "Control Engineering Lab",
            "Skill-based Lab Course",
            "Mini Project II"
        ],
        "VII": [
            "Refrigeration and Air Conditioning",
            "Finite Element Analysis",
            "Department Level Optional Course IV",
            "Department Level Optional Course V",
            "Open Elective I",
            "Refrigeration and Air Conditioning Lab",
            "Finite Element Analysis Lab",
            "Project Phase I",
            "Comprehensive Viva"
        ],
        "VIII": [
            "Power Plant Engineering",
            "Automobile Engineering",
            "Department Level Optional Course VI",
            "Open Elective II",
            "Project Phase II",
            "Power Plant Engineering Lab",
            "Automobile Engineering Lab",
            "Comprehensive Viva II"
        ]
    },

    "IT": {
        ...commonFirstSecondSemCourses,
        "III": [
            "Engineering Mathematics-III", 
            "Data Structure and Analysis", 
            "Database Management System", 
            "Principle of Communication", 
            "Paradigms and Computer Programming Fundamentals", 
            "Data Structure Lab", 
            "SQL Lab", 
            "Computer Programming Paradigms Lab", 
            "Java Lab (SBL)", 
            "Mini Project – 1 A for Front-end/Backend Application using JAVA"
        ],
        "IV": [
            "Engineering Mathematics-IV", 
            "Computer Network and Network Design", 
            "Operating System", 
            "Automata Theory", 
            "Computer Organization and Architecture", 
            "Network Lab", 
            "Unix Lab", 
            "Microprocessor Lab", 
            "Python Lab (SBL)", 
            "Mini Project – 1 B for Python-based automation projects"
        ],
        "V": [
            "Internet Programming", 
            "Computer Network Security ", 
            "Entrepreneurship and  E- business ", 
            "Software Engineering ", 
            "Department Optional Course-1", 
            "IP Lab ", 
            "Security Lab ", 
            "DevOPs Lab", 
            "Advance DevOPs Lab ",
            "Professional Communication and Ethics-II", 
            "Mini Project–2 A"
        ],
        "VI": [
  "Data Mining & Business Intelligence",
  "Web X.0",
  "Wireless Technology",
  "AI and DS – 1",
  "Department Optional Course – 2",
  "BI Lab",
  "Web Lab",
  "Sensor Lab",
  "MAD & PWA Lab",
  "DS using Python Skill based Lab",
  "Mini Project – 2 B Based on ML"
],

        "VII": [
  "AI and DS –II",
  "Internet of Everything",
  "Department Optional Course – 3",
  "Department Optional Course – 4",
  "Institute Optional Course – 1",
  "Data Science Lab",
  "IOE Lab",
  "Secure Application Development",
  "Recent Open Source Project Lab",
  "Major Project I"
],

        "VIII": [
  "Blockchain and DLT",
  "Department Optional Course – 5",
  "Department Optional Course – 6",
  "Institute Optional Course – 2",
  "Blockchain Lab",
  "Cloud computing",
  "Major Project II"
]

    },
    
    "CIVIL": {
        ...commonFirstSecondSemCourses,
        "III": [
            "Engineering Mathematics-III", 
            "Mechanics of Solids", 
            "Engineering Geology", 
            "Architectural Planning & Design of Buildings", 
            "Fluid Mechanics-I", 
            "Skill-Based Lab Course-I", 
            "Mini Project-1A"
        ],
        "IV": [
            "Engineering Mathematics-IV", 
            "Structural Analysis", 
            "Surveying", 
            "Building Materials & Concrete Technology", 
            "Fluid Mechanics-II", 
            "Skill-Based Lab Course-II", 
            "Mini Project-1B"
        ],
        "V": [
            "Theory of Reinforced Concrete Structures", 
            "Applied Hydraulics", 
            "Geotechnical Engineering-I", 
            "Transportation Engineering", 
            "Department Level Optional Course-1", 
            "Professional Communication and Ethics", 
            "Mini Project 2A"
        ],
        "VI": [
            "Design & Drawing of Steel Structures", 
            "Water Resources Engineering", 
            "Geotechnical Engineering-II", 
            "Environmental Engineering", 
            "Department Level Optional Course-2", 
            "Skill-Based Lab Course-III", 
            "Mini Project 2B"
        ],
        "VII": [
            "Design & Drawing of Reinforced Concrete Structures", 
            "Quantity Survey, Estimation and Valuation", 
            "Department Level Optional Course-3", 
            "Department Level Optional Course-4", 
            "Institute Level Optional Course-1", 
            "Major Project-Part I"
        ],
        "VIII": [
            "Design of Mechanical Systems", 
            "Industrial Engineering and Management", 
            "Power Engineering", 
            "Department Level Optional Course-4", 
            "Institute Level Optional Course-II", 
            "Project II"
        ]
    },
    
    "AIML": {
        ...commonFirstSecondSemCourses,
        "III": [
            "Engineering Mathematics-III",
            "Data Structures & Algorithms",
            "Digital Logic Design",
            "Discrete Mathematics",
            "Python Programming",
            "Data Structures Lab",
            "Python Programming Lab",
            "Skill-Based Lab Course-I",
            "Mini Project-1A"
        ],
        "IV": [
            "Engineering Mathematics-IV",
            "Database Management Systems",
            "Computer Organization & Architecture",
            "Operating Systems",
            "Probability & Statistics",
            "DBMS Lab",
            "OS Lab",
            "Skill-Based Lab Course-II",
            "Mini Project-1B"
        ],
        "V": [
            "Design & Analysis of Algorithms",
            "Machine Learning",
            "Web Technologies",
            "Software Engineering",
            "Department Elective-I (e.g., Computer Vision)",
            "Machine Learning Lab",
            "Web Technologies Lab",
            "Professional Ethics",
            "Mini Project 2A"
        ],
        "VI": [
            "Artificial Intelligence",
            "Natural Language Processing",
            "Deep Learning Fundamentals",
            "Department Elective-II (e.g., Reinforcement Learning)",
            "AI Lab",
            "NLP Lab",
            "Skill-Based Lab Course-III",
            "Mini Project 2B"
        ],
        "VII": [
            "Advanced Machine Learning",
            "Neural Networks",
            "Department Elective-III (e.g., Robotics)",
            "Department Elective-IV (e.g., IoT)",
            "Open Elective-I",
            "Advanced ML Lab",
            "Major Project-Part I"
        ],
        "VIII": [
            "Cognitive Computing",
            "AI Ethics & Governance",
            "Department Elective-V (e.g., Quantum ML)",
            "Open Elective-II",
            "Major Project-Part II"
        ]
    },
    
    "DS": {
        ...commonFirstSecondSemCourses,
        "III": [
            "Engineering Mathematics-III",
            "Data Structures & Algorithms",
            "Statistics for Data Science",
            "Python Programming",
            "Discrete Mathematics",
            "Data Structures Lab",
            "Python Lab",
            "Skill-Based Lab Course-I",
            "Mini Project-1A"
        ],
        "IV": [
            "Engineering Mathematics-IV",
            "Database Management Systems",
            "Data Visualization",
            "Probability & Stochastic Processes",
            "Object-Oriented Programming",
            "DBMS Lab",
            "Data Visualization Lab",
            "Skill-Based Lab Course-II",
            "Mini Project-1B"
        ],
        "V": [
            "Machine Learning",
            "Big Data Analytics",
            "Web Scraping & APIs",
            "Optimization Techniques",
            "Department Elective-I (e.g., Time Series Analysis)",
            "ML Lab",
            "Big Data Lab",
            "Professional Ethics",
            "Mini Project 2A"
        ],
        "VI": [
            "Advanced Statistics",
            "Business Intelligence",
            "Cloud Computing",
            "Department Elective-II (e.g., NoSQL Databases)",
            "Cloud Lab",
            "BI Tools Lab",
            "Skill-Based Lab Course-III",
            "Mini Project 2B"
        ],
        "VII": [
            "Deep Learning for Data Science",
            "Data Engineering",
            "Department Elective-III (e.g., Fraud Analytics)",
            "Department Elective-IV (e.g., Marketing Analytics)",
            "Open Elective-I",
            "Data Engineering Lab",
            "Major Project-Part I"
        ],
        "VIII": [
            "Data Governance & Privacy",
            "Real-Time Analytics",
            "Department Elective-V (e.g., AI for Business)",
            "Open Elective-II",
            "Major Project-Part II"
        ]
    }
};
