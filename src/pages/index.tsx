import { Commissioner } from "next/font/google";
import { HomeV2 } from "@/ui/components/Home";

const commissioner = Commissioner({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-[#F4F3EF] ${commissioner.className}`}>
      <HomeV2 />
    </main>
  );
}
