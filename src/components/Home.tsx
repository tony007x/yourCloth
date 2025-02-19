import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-screen bg-[#1c1c1c] text-white justify-center items-center">
      Home
      <Button
        className="bg-white text-black px-4 py-2 rounded-md"
        onClick={() => navigate("/about")}
      >
        About
      </Button>
    </div>
  );
}

export default Home;
