import ResetPasswordForm from "../forms/ResetPasswordForm";

export const metadata = {
  title: "Reset Password - My Personal Portfolio",
  description: "Reset your password to regain access to your account. Enter your email address and follow the instructions sent to you.",
  keywords: "reset password, account recovery, forgot password, user account, password reset form",
  author: "Hruday Kumar", 
};

const page = () => {
  return (
    <>
        <ResetPasswordForm />
    </>
  )
}

export default page