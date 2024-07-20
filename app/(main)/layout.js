import { redirect } from "next/navigation";
import LeftPannel from "./_components/LeftPannel";
import SearchCommand from "@/components/searchCommand";
import SearchDataProvider from "@/components/SearchDataProvider";

const MainLayout = ({ children }) => {
  // const { isAuthenticated, isLoading } = useConvexAuth();

  const isAuthenticated = true;
  const isLoading = false;

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <p>Loadin</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <LeftPannel />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchDataProvider />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
