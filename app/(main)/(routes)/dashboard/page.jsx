import { getCurrentUser } from "@/app/_lib/getCurrentUser";
import Image from "next/image";
import CreateNoteButton from "./_components/CreateNoteButton";

const Dashboard = async () => {
  const user = await getCurrentUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.name}&apos;s Notion
      </h2>
      <p>{user.uuid}</p>
      <CreateNoteButton />
    </div>
  );
};

export default Dashboard;
