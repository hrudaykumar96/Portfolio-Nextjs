import ContactForm from "../forms/ContactForm";

export const metadata = {
  title: "Contact Me - My Personal Portfolio",
  description: "Get in touch with me! Use the contact form to reach out for inquiries, project collaborations, or just to say hello.",
  keywords: "contact me, web developer, portfolio, get in touch, inquiries, collaborations, web developer, personal portfolio, developer portfolio, Hruday Kumar Portfolio, React developer, Next.js developer, MERN stack developer, frontend developer, backend developer, JavaScript developer, Python developer, Django developer, Node.js developer, Hruday Kumar, React web developer, full-stack developer portfolio",
  author: "Hruday Kumar",
  robots: "index, follow",
};

const page = () => {
  return (
    <>
        <ContactForm/>
    </>
  )
}

export default page