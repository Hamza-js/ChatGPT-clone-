import { SessionProvider } from "../components/SessionProvider";
import SideBar from "../components/SideBar";
import "../styles/globals.css";
import { getServerSession } from "next-auth"
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession(authOptions)
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}> 
       {
        !session ? ( <Login />):(<div className="flex">
        {/* sidebar */}
        <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
          <SideBar />
        </div>
        {/* client provider */}
        <div className=" flex-1 bg-[#343541]">{children}</div>
      </div>)
       }
        </SessionProvider>
      </body>
    </html>
  );
}