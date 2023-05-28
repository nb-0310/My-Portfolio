import SectionHeader from "../../Utils/SectionHeader";
import Project from "./Project";
import styles from "./projects.module.scss";
import abcity from "../../Assets/abcity.png";
import Netflix from "../../Assets/netflix.png";
import Planit from "../../Assets/planit.png";
import Pathfinding from "../../Assets/pathfinding.png";
import Sorting from "../../Assets/sorting.png";
import Weather from "../../Assets/weather.png"

const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "AbCity",
    imgSrc: abcity,
    code: "https://github.com/nb-0310/AbCity-gym-website",
    projectLink: "https://ab-city-gym-website.vercel.app/",
    tech: ["React", "Tailwind", "Firebase"],
    description:
      "Our gym website is a dynamic online platform designed to inspire and motivate individuals on their fitness journey. With a modern and user-friendly interface, we provide comprehensive information about our gym facilities, training programs, and expert trainers. ",
    modalContent: (
      <>
        <p>
          Our gym website is a robust and interactive online platform built
          using React, Tailwind CSS, React Hooks, Context API, Firebase
          Authentication, Firestore, and deployed on Vercel. With its
          cutting-edge technology stack, the website offers an immersive
          experience for fitness enthusiasts of all levels.
        </p>
        <p>
          Through its sleek and modern design, the website showcases a wide
          range of gym facilities, state-of-the-art equipment, and tailored
          training programs. Users can explore detailed information about our
          facilities, trainers, class schedules, and membership options.
        </p>
        <p>
          To enhance user experience and personalization, the website integrates
          Firebase Authentication.
        </p>
        <p>
          With a commitment to accessibility, the website is responsive and
          optimized for various devices and screen sizes, allowing users to
          access gym information and resources anytime, anywhere.
        </p>
      </>
    ),
  },
  {
    title: "Netflix Clone",
    imgSrc: Netflix,
    code: "https://github.com/nb-0310/netflix-clone",
    projectLink: "https://netflix-clone-eight-tau.vercel.app/",
    tech: ["React", "Tailwind", "Firebase"],
    description:
      "My Netflix clone is a web application that replicates the popular streaming platform's interface, allowing users to browse a wide range of movies and TV shows from various genres.",
    modalContent: (
      <>
        <p>
          My Netflix clone is a feature-rich web application built using React,
          React Hooks, Context API, and Tailwind CSS.
        </p>
        <p>
          It provides users with an immersive experience, allowing them to
          browse a vast collection of movies and TV shows from different genres.
        </p>
        <p>
          The application integrates Firebase Authentication for user
          registration and login.
        </p>
        <p>
          Additionally, the use of Firestore ensures seamless data storage and
          retrieval, facilitating favourite Movies and TV Shows storage.
        </p>
        <p>The app was deployed on vercel.</p>
      </>
    ),
  },
  {
    title: "PlanIT",
    imgSrc: Planit,
    code: "https://github.com/nb-0310/planit",
    projectLink: "https://planit-meetings.netlify.app/",
    tech: ["React", "Tailwind", "Material UI"],
    description:
      "PlanIt is a web application that allows two individuals to schedule a meeting based on their busy work schedules. The application takes into account the working hours and pre-planned meetings of both individuals and suggests available time slots for the meeting.",
    modalContent: (
      <>
        <p>
          PlanIt is an innovative web application that draws inspiration from a
          challenging Google coding interview question. I was inspired to make
          this project from the google coding interview question and decided to
          create a UI to solve the problem.
        </p>
        <p>
          Taking on a similar problem, PlanIt leverages a user-friendly
          interface built with React, Material-UI components, and Tailwind CSS
          to tackle the intricacies of scheduling meetings between two
          individuals.
        </p>
        <p>
          This project not only offers a practical solution to a real-world
          problem but also demonstrates the power of combining problem-solving
          skills with a delightful user interface.
        </p>
        <p>
          Deployed on Netlify, PlanIt ensures a visually appealing and
          seamlessly accessible experience, revolutionizing the way individuals
          coordinate and optimize their meeting schedules.
        </p>
      </>
    ),
  },
  {
    title: "Pathfinding Visualizer",
    imgSrc: Pathfinding,
    code: "https://github.com/nb-0310/Pathfinding-Visualizer",
    projectLink: "https://nb-0310.github.io/Pathfinding-Visualizer/",
    tech: ["HTML", "CSS", "Javascript"],
    description:
      "A tool to visualize several pathfinding algorithms and maze generation algorithms on a graph.",
    modalContent: (
      <>
        <p>
          Pathfinding-Visualizer is a web-based tool that allows you to
          visualize various pathfinding algorithms and maze generation
          algorithms on a graph. It provides an interactive interface to
          understand and analyze the performance of different algorithms in
          finding paths and generating mazes.
        </p>
        <p>
          Select from a variety of pathfinding algorithms like Dijkstra's
          algorithm, breadth first search and depth first search and see how
          they operate on the graph in real-time.
        </p>
        <p>
          Observe the step-by-step process of each algorithm as it explores the
          graph, highlights visited nodes, and discovers the shortest path.
        </p>
        <p>
          Generate randomized mazes using recursive backtracking, providing
          challenging environments for pathfinding algorithms to navigate.
        </p>
        <p>
          I was Inspired to make this project from{" "}
          <a href="https://www.youtube.com/watch?v=n4t_-NjY_Sg" target="_blank">
            Clement Mihailescu,
          </a>{" "}
          a youtuber who worked at Google and Facebook.
        </p>
      </>
    ),
  },
  {
    title: "Sorting Visualizer",
    imgSrc: Sorting,
    code: "https://github.com/nb-0310/Sorting-Visualizer",
    projectLink: "https://nb-0310.github.io/Sorting-Visualizer/",
    tech: ["HTML", "CSS", "Javascript"],
    description:
      "A tool to visualize several array sorting algorithms on an elegant and minimal",
    modalContent: (
      <>
        <p>
          This is a JavaScript sorting visualizer tool that allows you to
          visualize the sorting algorithms such as merge, quick, insertion, and
          bubble sort.
        </p>
        <p>
          You can also generate a new random array, change the speed of
          visualization, and change the size of the array.
        </p>
        <p>You get the idea.</p>
        <p>
          I was Inspired to make this project from{" "}
          <a href="https://www.youtube.com/watch?v=n4t_-NjY_Sg" target="_blank">
            Clement Mihailescu,
          </a>{" "}
          a youtuber who worked at Google and Facebook.
        </p>
      </>
    ),
  },
  {
    title: "Weather App",
    imgSrc: Weather,
    code: "https://github.com/nb-0310/Weather-App",
    projectLink: "https://reacttailwindweatherapp.netlify.app/",
    tech: ["React", "Tailwind", "Vite"],
    description:
      "My weather app is a user-friendly and intuitive application that provides real-time weather information enabling users to stay informed about current weather conditions with ease.",
    modalContent: (
      <>
        <p>
          My weather app, built with React, Tailwind CSS, and Vite, offers a
          seamless and visually captivating experience for users to access
          real-time weather information.
        </p>
        <p>
          With its responsive design, the app ensures a consistent and intuitive
          interface across various devices
        </p>
        <p>
          {" "}
          As a unique feature, the background image and icons dynamically change
          based on the current weather conditions, providing an immersive visual
          representation of the weather.{" "}
        </p>
        <p>
          Deployed on Netlify, our weather app combines functionality and
          aesthetics, keeping users informed about the latest weather updates in
          a delightful and interactive manner.
        </p>
      </>
    ),
  },
];

export default Projects;
