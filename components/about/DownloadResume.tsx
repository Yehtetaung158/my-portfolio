import { Download } from "lucide-react"; // optional icon
import { Button } from "@/components/ui/button"; // သင့် UI Button component ဖြစ်နိုင်

const DownloadResume = () => {
  return (
    <a
      href="/Ye_Htet_Aung_Frontend_Developer.pdf"
      download
      className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
    >
      <Download className="w-4 h-4 mr-2" />
      Download Resume
    </a>
  );
};

export default DownloadResume;
