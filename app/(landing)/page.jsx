import getCurrentUser, { getCurrentSession } from "../_lib/getCurrentUser";
import Footer from "./_components/Footer";
import Heading from "./_components/Heading";
import Heroes from "./_components/Heroes";

export default async function Home() {
  const session = await getCurrentSession();

  const isAuthenticated = Boolean(session);

  return (
    <div className="min-h-full flex flex-col">
      <div
        className="flex flex-col items-center justify-center md:justify-start 
      text-center gap-y-8 flex-1 px-6 pb-10"
      >
        <Heading isAuthenticated={isAuthenticated} />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}
