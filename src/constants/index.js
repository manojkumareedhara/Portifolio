import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    star,
    radicalAI,
    dashDotRobotics,
    expertsHub,
    spot,
    intbuddy,
    applyDrone
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "Introduction",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title:"Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: 'resume',
        title: "Resume"
    }
    
];

const services = [
    {
        title: "Robotics Engineer",
        icon: web,
    },
    {
        title: "AI Solutions Engineer",
        icon: mobile,
    },
    {
        title: "Computer Vision Expert",
        icon: backend,
    },
    {
        title: "Full stack Developer",
        icon: creator,
    },
    
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
    title: "ROS Developer",
    company_name: "Autonome Labs",
    icon: applyDrone,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Present",
    points: [
        "Spearheading the development of cutting-edge Unmanned Aerial Vehicles (UAVs) and Maritime Autonomous Systems",
        "Orchestrating the seamless integration of advanced sensors with ROS (Robot Operating System) in drone platforms, implementing state-of-the-art SLAM (Simultaneous Localization and Mapping) algorithms for robust navigation",
        "Designing and implementing sophisticated sensor fusion techniques, leveraging Machine Learning and Deep Learning models to significantly enhance drone performance and autonomy",
        "Leading the application and optimization of developed technologies on VOXL drone platforms, overseeing rigorous testing procedures and successful deployment across multiple drone fleets",
        "Collaborating with cross-functional teams to ensure seamless integration of software and hardware components, resulting in highly efficient and reliable autonomous systems"
    ]
    },
    {
        title: "AI / ML Developer",
        company_name: "MAASR LTD",
        icon: star,  
        iconBg: "#E6DEDD", 
        date: "Jan 2024 - Jul2024",
        points: [
        "Leading the development of AI-powered office automation application, showcasing expertise in cutting-edge technologies and end-to-end project management.",
        "Implementing hybrid MySQL/MongoDB data ecosystem, enhancing query performance by 60%.",
        "Integrated advanced LLMs and NLP technologies (SpaCy, NLTK, LangChain), reducing manual task processing by 40%.",
        "Architected scalable web solution with React.js and Flask/FastAPI, improving user engagement by 30%.",
        "Orchestrated AWS deployment using Docker and Kubernetes, cutting deployment time by 70%.",
        "Achieved 95% customer satisfaction through direct stakeholder engagement and support.",
        "Increased overall workplace productivity by 35% and reduced operational costs by 20%.",
        "Solidified MAASR LTD's position as an industry leader in AI-powered workplace solutions."
        ],
    },
    {
        title: "AI Engineer Intern",
        company_name: "Radical AI",
        icon: radicalAI, // You'll need to replace this with the actual import or path to the company icon
        iconBg: "#E6DEDD", // You can adjust this color as needed
        date: "Mar 2024 - May 2024",
        points: [
        "Developed ReX, an AI Coach, utilizing OpenAI, Vertex AI, and TensorFlow, implementing NLP and machine learning techniques to enhance personalized career coaching.",
        "Achieved a 20% improvement in user satisfaction and engagement through advanced AI model development and implementation.",
        "Leveraged cloud-based data warehousing and processing pipelines to streamline collaboration and implement automated data pre-processing techniques.",
        "Reduced data processing times by 15% for customized learning solutions through efficient cloud-based data processing implementations.",
        "Assisted in fine-tuning AI models, focusing on improving accuracy and performance of natural language processing algorithms.",
        "Contributed to the development of more responsive and context-aware coaching interactions, enhancing the overall user experience.",
        ],
    },
    {
        title: "Robotics Engineer",
        company_name: "Dash Dot Robotics",
        icon: dashDotRobotics, 
        iconBg: "#E6DEDD", 
        date: "Jun 2021 - Aug 2022",
        points: [
            "Architected Box-it, an autonomous inventory management system, integrating robotics and IoT solutions.",
            "Led a 10-engineer team, implementing features that eliminated manual counting and increased sales by 4-8% through improved accuracy.",
            "Engineered real-time tracking and sensor-based autonomous functionality using C++ and ROS2.",
            "Developed advanced communication protocols leveraging star and mesh network configurations for optimized device connectivity.",
            "Ensured seamless integration with AWS cloud services, enhancing real-time monitoring and management capabilities.",
            "Implemented efficient data transmission between Box-it devices and cloud infrastructure.",
            "Engineered a ML-powered UI for inventory analysis and optimization, significantly reducing operational discrepancies.",
            "Implemented real-time management features, enhancing overall system efficiency.",
        ],
    },
    {
        title: "Robotics Intern",
        company_name: "Experts Hub",
        icon: expertsHub,
        iconBg: "#E6DEDD",
        date: "Mar 2020 - Jul 2020",
        points: [
        "Led a high-performing Photoshop team of over 12 technicians and operators, overseeing the entire process of prototype building, testing, and validation of Backhoe Loaders.",
        "Directed vehicle integration and prototype machine testing endeavours, ensuring strict adherence to design specifications and quality criteria.",
        "Proficiently employed AutoCAD and associated tools to drive project success and exceed performance targets.",
        "Directed interdepartmental efforts to synchronise project timelines, ensuring seamless communication and resource allocation.",
        "Facilitated successful project completion within strict deadlines, leading to a 15% increase in overall project output and stakeholder satisfaction.",
        "Conducted validation tests on the final machines after complete assembly, utilising a range of tests for vehicle validation and endurance assessment.",
        "Ensured project success by conducting product design reviews, initiating the identification of potential issues, and implementing appropriate measures to mitigate risks and maintain product quality.",
        ],
    }
];

const testimonials = [
    
];

const projects = [
        {
        name: "IntBuddy",
        description:
        "Web-based platform facilitating peer interaction among international students. Features robust APIs, efficient databases, and machine learning algorithms for student data analysis, enhancing the global student experience.",
        tags: [
        {
        name: "react",
        color: "blue-text-gradient",
        },
        {
        name: "php",
        color: "green-text-gradient",
        },
        {
        name: "mysql",
        color: "pink-text-gradient",
        },
        {
        name: "machine learning",
        color: "orange-text-gradient",
        },
        ],
        image: intbuddy, // You'll need to replace this with the actual import or path to the project image
        source_code_link: "https://intbuddy.com/index.html", // Replace with your actual GitHub link
    },



    
     {
        name: "Frontier - Based Exploration",
        description:
            "Advanced meta-learning framework for Search and Rescue (SAR) robot simulations, leveraging MAML, REPTILE, and Zero-shot Learning. Implements Deep RL algorithms to significantly enhance exploration capabilities and decision-making accuracy in complex environments.",
        tags: [
            {
                name: "Deep RL",
                color: "blue-text-gradient",
            },
            {
                name: "Meta-Learning",
                color: "green-text-gradient",
            },
            {
                name: "PyTorch",
                color: "pink-text-gradient",
            },
            {
                name: "ROS2",
                color: "orange-text-gradient",
            },
            {
                name: "Gazebo",
                color: "purple-text-gradient",
            },
        ],
        image: star, // You'll need to replace this with the actual import or path to the project image
        source_code_link: "https://github.com/yourusername/frontier-exploration", // Replace with your actual GitHub link
    },
    {
        name: "Spot - Fire Defender Robot",
        description:
        "Advanced fire detection system for Boston Dynamics' Spot robot, utilizing Python API and ROS. Features reinforcement learning algorithms for autonomous navigation in hazardous environments, integrating thermal imaging and LIDAR for enhanced situational awareness.",
        tags: [
        {
        name: "Robotics",
        color: "blue-text-gradient",
        },
        {
        name: "AI",
        color: "green-text-gradient",
        },
        {
        name: "Computer Vision",
        color: "pink-text-gradient",
        },
        {
        name: "ROS",
        color: "orange-text-gradient",
        },
        {
        name: "Spot SDK",
        color: "purple-text-gradient",
        },
        ],
        image: spot, // You'll need to replace this with the actual import or path to the project image
        source_code_link: "https://streamable.com/vq2mds", // Replace with your actual GitHub link
    },
    {
    name: "Deliveri - Bot",
    description:
        "AI-powered autonomous robot for hotel room service deliveries, enhancing guest experience and operational efficiency. Features advanced navigation in dynamic indoor environments, obstacle avoidance, and secure delivery protocols, showcasing cutting-edge robotics and AI integration.",
    tags: [
        {
            name: "Robotics",
            color: "blue-text-gradient",
        },
        {
            name: "AI",
            color: "green-text-gradient",
        },
        {
            name: "ROS",
            color: "pink-text-gradient",
        },
        {
            name: "PyTorch",
            color: "orange-text-gradient",
        },
        {
            name: "SLAM",
            color: "purple-text-gradient",
        },
    ],
    image: star, // You'll need to replace this with the actual import or path to the project image
    source_code_link: "https://github.com/manojkumareedhara/delivery_bot_description.git", // Replace with your actual GitHub link
}
];

export { services, technologies, experiences, testimonials, projects };
