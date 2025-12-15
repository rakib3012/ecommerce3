import Footer from "@/Component/Footer";
import Navbar from "@/Component/Navbar";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">{children}</main>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default layout;
