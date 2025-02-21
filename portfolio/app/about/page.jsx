import AboutPage from "../components/AboutPage";

export const metadata = {
  title: "About Me - My Personal Portfolio",
  description: "Learn more about me, my background, skills, and experience as a web developer.",
  keywords: "about me, web developer, software engineer, frontend developer, Next.js, React",
  author: "Hruday Kumar"
};

const page = () => {
  return (
    <div className="min-h-screen w-full">
        <AboutPage/>
    </div>
  )
}

export default page