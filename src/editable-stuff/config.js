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
      image: "fa-leetcode",
      url: "https://leetcode.com/mahe113vsp/",
    },
    {
      image: "fa-hackerrank",
      url: "https://www.hackerrank.com/mahe113vsp?hr_r=1",
    },
    {
      image: "fa-geeksforgeeks",
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
    "My name is Mahesh Hasbi. I’m a graduate of 2019 from BV Raju Institute of Technology at Hyderabad with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: "https://drive.google.com/file/d/1lhRuEJkgkbIqcFH8QS9HC_s6ovI5ECdf/view?usp=sharing",
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
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/maheshhasbi.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/maheshhasbi.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
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
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };