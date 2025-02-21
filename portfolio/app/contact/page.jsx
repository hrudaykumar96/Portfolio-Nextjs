import ContactForm from "../forms/ContactForm";

export const metadata = {
  title: "Contact Me - My Personal Portfolio",
  description: "Get in touch with me! Use the contact form to reach out for inquiries, project collaborations, or just to say hello.",
  keywords: "contact me, web developer, portfolio, get in touch, inquiries, collaborations",
  author: "Hruday Kumar",
};

const page = () => {
  return (
    <>
        <ContactForm/>
    </>
  )
}

export default page