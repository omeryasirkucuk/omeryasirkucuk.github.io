/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "OYK",
  title: "Hi all, I'm Omer",
  subTitle: emoji(
    "I’m working as a Data Analyst at Migros - Mímeda, where I focus on analyzing customer behavior and automating reporting processes to drive data-informed strategies. 🚀 "
  ),
  resumeLink:
    "hhttps://drive.google.com/file/d/10FrLyp8SDohr_0inZh3RlXv529KuYXSu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/omeryasirkucuk",
  linkedin: "https://www.linkedin.com/in/omeryasirkucuk/",
  gmail: "omeryasirkucuk@gmail.com",
  instagram: "https://www.instagram.com/meryasir",
  medium: "https://medium.com/@omeryasirkucuk",
  kaggle: "https://www.kaggle.com/omeryasirkucuk",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Driven by a passion for cloud and data engineering technologies, I continuously explore new tools to unlock data's potential and enhance business value.",
  skills: [
    emoji("⚡ Extract, clean, and process data from various sources using SQL, Python"),
    emoji("⚡ Build and maintain ETL processes for extracting, transforming, and loading data from various sources"),
    emoji("⚡ Integration of third-party services and cloud platforms such as AWS"),
    emoji("⚡ Create interactive dashboards and reports using tools like Tableau, Power BI")
  ]
  ,

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "nosql",
      fontAwesomeClassname: "fab fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Istanbul Technical University",
      logo: require("./assets/images/itu.png"),
      subHeader: "Master of Science in Big Data & Business Analytics",
      duration: "September 2023 - June 2025",
      desc: "Master of Science Program with thesis that focus on data engineering and machine learning issues",
      descBullets: [
        "Computer Vision, Big Data Techs, DB Management, Advances in DS, Math for ML"
      ]
    },
    {
      schoolName: "Istanbul Technical University",
      logo: require("./assets/images/itu.png"),
      subHeader: "Civil Engineering Bachelor's Degree",
      duration: "September 2013 - January 2019",
      desc: "Apart from the network and business perspective I gained through my part-time work and internships during my education, it was a waste of time."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Analysis/Visualization/Reporting", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Public/Private Data Technologies",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst",
      company: "Migros Media Data (Mimeda)",
      companylogo: require("./assets/images/mimeda_logo.jpg"),
      date: "August 2024 – Present",
      descBullets: [
        "Analyzing over 15 million active customer’s behaviour from the Migros Money Card program to identify purchasing trends for Migros’ product suppliers",
        "Creating G&L, switch, uplift, trend, profile, campaign analysis to drive data-informed strategies.",
        "Developing automation modules to replace manual reporting processes for the Growth and Sales teams, reducing report generation time and enabling faster data-driven decision-making."
      ]
    },
    {
      role: "Data Analyst (Ford Trucks Marketing)",
      company: "Ford Otosan",
      companylogo: require("./assets/images/ft.png"),
      date: "May 2022 – July 2024",
      descBullets: [
        "Designed and maintained interactive dashboards in Power BI and Tableau, leveraging complex SQL queries to visualize key metrics such as connectivity, customization and finance services sales. Enabled real-time decision-making for stakeholders, destroyed completely reporting delays.",
        "Conducted and processed prediction and classification projects with Data Squad teams for enhanced project like segmented drivers based on their Ford Trucks usage parameters to reduce their fuel-cost through ConnecTruck data.",
        "Identifying unexplored data opportunities for the business to unlock and maximize the potential of data withing the organization"
      ]
    },
    {
      role: "Strategy Analyst",
      company: "TRT (Turkish Radio and Television Corporation)",
      companylogo: require("./assets/images/trt.png"),
      date: "December 2020 – May 2022",
      descBullets: [
        "Researching and analysing the organization and the competitive landscape continuously in order to identify and evaluate threats, opportunities and new business areas",
        "Planning, implementing, monitoring and reporting projects defined in strategic plans",
        "Market research, competitive analysis, preliminary strategy studies, KPI determination in new projects, preparing project / strategy presentation to the Board of Directors"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  display: true // Set false to hide this section, defaults to true
};
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "omeryasirkucuk@gmail.com",
  display: true // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable,
  openSource,
  resumeSection,
  talkSection,
  podcastSection,
  twitterDetails
};
