// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mahesh",
  middleName: "",
  lastName: "Hasbi",
  message: " Committed to shaping the future through technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/MAHESH-HASBI",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/mahesh.hasbi/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/maheshhasbi/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mahesh-hasbi/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/MheshHsbi1",
    },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/channel/UCT9jzy6odVxNaeQKpMFEgAQ",
    },
    {
      image: "fa-quora",
      url: "https://www.quora.com/profile/Mahesh-Hasbi",
    },
    {
      image: "fa-solid fa-l",
      url: "https://leetcode.com/mahe113vsp/",
    },
    {
      image: "fa-hackerrank",
      url: "https://www.hackerrank.com/mahe113vsp?hr_r=1",
    },
    {
      image: "fa-brands fa-gg",
      url: "https://auth.geeksforgeeks.org/user/maheshhasbi/practice/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/maheshhasbi.jpg"),
  imageSize: 375,
  message:
  " I'm Mahesh Hasbi, a passionate graduate student pursuing a Master's in Computer Science at the University of North Carolina at Charlotte. With a keen interest in both software engineering and data engineering, I am driven to excel in these dynamic fields. As a Software Engineering Lead at Gradient, I've successfully guided and mentored a team of interns, fostering growth and collaboration. Through hands-on experience, I've orchestrated the development of cross-platform applications using React Native and Firebase, showcasing my technical prowess. During my tenure at Noodle.ai, I delved into the realm of data engineering. I contributed to ML model versioning using MLFlow, designed Kubeflow data processing pipelines, and streamlined workflows with automation scripts. These experiences equipped me with a robust foundation in data engineering technologies and best practices. Committed to excellence, I ensure coding standards and best practices are upheld through meticulous reviews. My proactive approach to learning and problem-solving enables me to contribute effectively to projects and collaborate seamlessly across teams. With a forward-looking mindset, I am excited to further harness my skills in software and data engineering to create innovative solutions in the ever-evolving tech landscape. ",
  resume: "https://drive.google.com/file/d/1EN8wKOmHAJrG5-Hmdh1FUZn7cKOVeyWj/view?usp=drive_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "MAHESH-HASBI", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership & Featured",
  message: " Experienced Teaching Assistant for the Big Data Analytics course at the University of North Carolina at Charlotte, mentoring and guiding 75 students. Proficiently graded 500+ papers, held weekly TA hours for issue resolution, and supported projects. Led discussion sections, facilitated group projects, and provided feedback on assignments. Demonstrated leadership in overseeing diverse student needs. As a Software Engineering Lead Intern at Gradient, directed and mentored a 6-member team, successfully orchestrating the development of a cross-platform application from scratch. Integrated mobile UI components with backend functionality, adhering to coding standards, and fostering a collaborative environment. Contributed significantly as a Software & Data Engineer at noodle.ai, designing Kubeflow data processing pipelines, automating workflow tasks, and resolving production pipeline failures. Leveraged SDK API development, Jenkins CI/CD pipeline construction, and third-party packages integration to optimize project outcomes. Acknowledged for problem-solving abilities and commitment by industry professionals, including Christian Kim, CEO of Gradient, and colleagues in the Ternium project. Recognized for resolving backlog file issues and sustaining data pipelines. These accolades reflect my dedication, teamwork, and technical prowess. My journey encompasses diverse experiences and honors, underscoring my leadership skills, technical expertise, and contributions to innovative projects. ",
  images: [
    { 
      img: require("../editable-stuff/appreciation_images/jagat_appreciation.png"), 
    },
    { 
      img: require("../editable-stuff/appreciation_images/jagat_appreciation_r1.png"),
    },
    { 
      img: require("../editable-stuff/appreciation_images/srihari_appreciation.png"), 
    },
    { 
      img: require("../editable-stuff/appreciation_images/srihari_appreciation_r1.png"), 
    },
    { 
      img: require("../editable-stuff/appreciation_images/farewell_anurag_avinash.png"), 
    },
    { 
      img: require("../editable-stuff/appreciation_images/farewell2.png"), 
    },
    { 
      img: require("../editable-stuff/appreciation_images/farewell3.png"), 
    },
    { 
      img: require("../editable-stuff/appreciation_images/christian_appreciation.png"), 
    },
    { 
      img: require("../editable-stuff/appreciation_images/gradient_linkedin_appreciation.png"), 
    },
    { 
      img: require("../editable-stuff/appreciation_images/gradient_linkedin_appreciation2.png"), 
    },
    { 
      img: require("../editable-stuff/appreciation_images/gradient_linkedin_appreciation3.png"), 
    },
    { 
      img: require("../editable-stuff/appreciation_images/gradient_meet.png"), 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};













// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Java", value: 80 },
    { name: "C/C++", value: 80 },
    { name: "Data Structures", value: 85 },
    { name: "MySQL", value: 90 },
    { name: "JavaScript", value: 70 },
    { name: "React Native", value: 60 },
    { name: "HTML/CSS", value: 50 },
    { name: "C#", value: 50 },
    { name: "Git", value: 90 },
    { name: "JIRA", value: 80 },
    { name: "Jupyter", value: 85 },
    { name: "Numpy", value: 80 },
    { name: "Pandas", value: 85 },
    { name: "CI/CD", value: 80 },
    { name: "HDFS", value: 85 },
    { name: "S3", value: 80 },
    { name: "AWS", value: 80 },
    { name: "SDLC", value: 80 },
    { name: "REST API", value: 75 },
    { name: "Kubernetes", value: 85 },
    { name: "Helm", value: 60 },
    { name: "Docker", value: 85 },
    { name: "Unix/Linux", value: 85 },
    { name: "XML", value: 75 },
    { name: "Airflow", value: 85 },
    { name: "MLFlow", value: 85 },
    { name: "Kubeflow", value: 85 },
    { name: "Dagster", value: 80 },
    { name: "Jenkins", value: 85 },
    { name: "Tableau", value: 80 },
    { name: "Data Analysis", value: 85 },
    { name: "Machine Learning", value: 80 },
    { name: "Data Visualization", value: 80 },
    { name: "Trouble Shooting", value: 85 },
    { name: "Microsoft Excel", value: 85 },
    { name: "JSON", value: 85 },
    { name: "Groovy", value: 75 },
    { name: "Extract, Transform, Load", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 85 },
    { name: "Creativity", value: 90 },
    { name: "Leadership", value: 90 },
    { name: "Time Management", value: 85 },
    { name: "Critical Thinking", value: 90 },
    { name: "Analytical Skills", value: 90 },
    { name: "Mentoring", value: 85 },
    { name: "Public Speaking", value: 85 },
    { name: "Teamwork", value: 90 }
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering, Data Engineering and ML Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mahe113vsp@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Teaching Assistant',
      companylogo: require('../assets/img/UNCC_logo.jpg'),
      date: 'January 2023 – Present',
      description: "➤ As a Teaching Assistant to Big Data Analytics (ITCS-6100) course under Prof. Gabriel Terejanu, I guide and mentor 75 graduate students.\n➤ Responsibilities include grading 500+ papers, conducting weekly TA hours for discussions and issue resolution, supporting projects, providing clerical assistance, and maintaining records.\n➤ Lead discussion sections, host office hours, facilitate group projects and discussions, and offer assignment feedback. This role hones my leadership, communication, and problem-solving skills while enhancing student engagement and learning outcomes. This experience showcases my dedication to education and teamwork, enriching my profile for career growth. ",
    },
    {
      role: 'Teaching Assistant',
      companylogo: require('../assets/img/UNCC_logo.jpg'),
      date: 'August 2022 – December 2022',
      description: "As an IA for the Undergrad Mobile Robotics course, provided comprehensive support to students, including assignment help, grading, and administrative duties. Mentored 43 students, graded over 500 papers, and held 60+ office hours. ",
    },
    {
      role: 'Software Engineeering Lead, Intern',
      companylogo: require('../assets/img/gradient_logo.jpg'),
      date: 'May 2023 – August 2023',
      description: "➤ Led, mentored, and managed a team of 6 software engineering interns, fostering their growth through guidance and professional development opportunities.\n➤ Orchestrated the development of a cross-platform application (iOS & Android) from scratch using React Native, a JavaScript framework. Integrated mobile UI components with backend functionality using Firebase SDK and Firebase Cloud Firestore for storage.\n➤ Crafted and executed the app's development roadmap, efficiently distributing tasks among team members. Conducted code quality reviews and fostered a collaborative environment for streamlined progression.\n➤ Provided technical expertise and guidance to address intricate challenges, empowering the team to make informed decisions.\n➤ Ensured adherence to coding standards and best practices through meticulous code, architecture, and design reviews.\n➤ Proactively managed team budget, encompassing resource allocation and tooling costs, including essential platforms like GitHub, Firebase, and JIRA.\n➤ Collaborated seamlessly with cross-functional teams, gaining a comprehensive understanding of project requirements, scopes, and timelines.",
    },
    {
      role: 'Software & Data Engineering',
      companylogo: require('../assets/img/noodleai_logo2.jpg'),
      date: 'August 2020 – July 2022',
      description: "➤ Proficient in building Kubeflow data processing pipelines, alert pipelines for production failures, and other pipelines to facilitate data processing.\n➤ Skilled in writing data migration scripts and workflow automation scripts to automate data management tasks and increase efficiency.\n➤ Experienced in owning and resolving production pipeline failures and ensuring smooth pipeline operations.\n➤ Capable of owning data processing pipelines, ensuring accurate processing of raw data, and delivering the processed data to data scientists for modeling.\n➤ Versatile in working across multiple departments including Machine Learning Engineering, Software Engineering, and Data Engineering with a strong understanding of DevOps.\n➤ Conducted extensive research to make all data processing pipelines generic, implementing and refactoring codes while also exploring new features required by data science pipelines.\n➤ Improved project efficiency by refactoring code to increase reusability, reduce complexity, and enhance code generality.\n➤ Contributed to the development and maintenance of multiple projects by implementing new functionalities, developing APIs, and addressing multiple bugs. ",
    },
    {
      role: 'Software/ML/DevOps Engineering Intern',
      companylogo: require('../assets/img/noodleai_logo.jpg'),
      date: 'October 2019 – July 2020',
      description: "➤ During my tenure as a Machine Learning Engineer Intern, I played a key role in integrating and implementing a reliable ML model versioning framework, leveraging MLFlow. The framework provided a seamless approach to visualizing model metrics, optimizing model versioning, streamlining experiment tracking, and enhancing the management and deployment of models.\n➤ Demonstrated proficiency in Software Development Kit (SDK) API development, Jenkins CI/CD pipeline construction, and end-to-end unit testing during my tenure as a software engineering intern.\n➤ Applied best practices in software engineering by refactoring existing code to enhance reusability, minimize complexity, and increase code generality.\n➤ Innovatively incorporated third-party packages into our project by experimenting with their features and functionalities to optimize project outcomes.",
    },
    {
      role: 'Software Engineering Intern',// Here Add Company Name
      companylogo: require('../assets/img/opentext_logo.jpg'),
      date: 'January 2019 – July 2019',
      description: "➤ Experienced in OpenText's AppWorks platform as a member of the Business Process Management team, with a specialization in low-code application development.\n➤ Skilled in designing workflows, specifically Entry BPMs and Exit BPMs, to optimize data processing within applications, while also overseeing their entire life cycle.\n➤ Proficient in client management, having worked with several prominent organizations such as Tesco, VMWare, Visteon, and Comcast.\n➤ Experienced in OpenText's AppWorks platform as a member of the Business Process Management team, with a specialization in low-code application development.\n➤ Skilled in designing workflows, specifically Entry BPMs and Exit BPMs, to optimize data processing within applications, while also overseeing their entire life cycle.\n➤ Proficient in client management, having worked with several prominent organizations such as Tesco, VMWare, Visteon, and Comcast.",
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
