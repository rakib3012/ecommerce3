 
 
// import HomeComponent from "@/Component/Home";


 

// export default function Home() {
//   return (
//    <>
//     <div className="flex items-center justify-center  h-[calc(100vh-56px)] font-sans overflow-hidden">

//       <HomeComponent/>

//     </div>
//     </>
//   );
// }


import { redirect } from "next/navigation";

export default function Page() {
  // Redirect root to dashboard (protected by middleware)
  redirect("/home");
}
