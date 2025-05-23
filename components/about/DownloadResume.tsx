import { Download } from "lucide-react"; // optional icon
import { Button } from "@/components/ui/button"; // သင့် UI Button component ဖြစ်နိုင်
import Link from "next/link";

const DownloadResume = () => {
  return (
    <Link
      // href="/Ye_Htet_Aung_Frontend_Developer.pdf"
      href="Ye_Htet_Aung_Frontend_Developer-1.pdf"
      download
      className="inline-flex items-center max-sm:text-sm  underline rounded-lg hover:bg-primary/90 transition text-purple-600"
    >
      <Download className="w-4 h-4 mr-2 max-sm:text-sm animate-bounce" />
      Download Resume
    </Link>
  );
};

export default DownloadResume;