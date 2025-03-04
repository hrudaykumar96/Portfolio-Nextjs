import LoginForm from "../forms/LoginForm";

export const metadata = {
  title: "Login - My Personal Portfolio",
  description: "Access your account by logging in to your personal dashboard. Enter your credentials to proceed.",
  keywords: "login, authentication, user account, login form, member area", 
  author: "Hruday Kumar",
  robots: "index, follow",
}


const page = () => {

  return (
    <div>
        <LoginForm />
    </div>
  )
}

export default page