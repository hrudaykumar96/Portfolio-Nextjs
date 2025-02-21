import HomePage from "./components/HomePage";


export const metadata = {
  title: "Personal Portfolio | Home",
  description: "Welcome to my personal portfolio, where I showcase my skills, projects, and experience as a web developer.",
  keywords: "web developer, personal portfolio, Next.js, React, frontend, backend, JavaScript, developer",
  author: "Hruday Kumar"
};


const page = () => {
  return (
    <>
      <HomePage/>
    </>
  );
};

export default page;
