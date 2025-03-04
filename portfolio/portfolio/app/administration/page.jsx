import AdminForm from "../forms/AdminForm";

export const metadata = {
  title: "Admin Panel - My Personal Portfolio", 
  description: "Manage user data, modify account information, and access administrative settings for your portfolio's users.",
  keywords: "admin panel, user management, modify user data, admin settings, user accounts",
  author: "Hruday Kumar", 
  robots: "index, follow",
};

const page = async() => {
  

  return (
    <>
        <AdminForm  />
    </>
  )
}

export default page