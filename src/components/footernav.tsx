import { ArrowRight } from "lucide-react";
import { useState } from "react";

function Footernav() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (events: React.FormEvent<HTMLFormElement>) => {
    events.preventDefault();
    console.log(email);
  };

  return (
    <div className="flex h-full text-white">
      <div className="flex w-full">
        <div className="flex flex-col w-full p-10 gap-4">
          <h1 className="font-bold uppercase text-[12px]">Account</h1>
          <div className="flex flex-col font-light text-[12px] gap-4 uppercase">
            <a href="#" className="hover:underline">LOG IN</a>
            <a href="#" className="hover:underline">SIGN UP</a>
            <a href="#" className="hover:underline">REDEEM A GIFT CARD</a>
          </div>
        </div>
        <div className="flex flex-col w-full p-10 gap-4">
          <h1 className="font-bold uppercase text-[12px]">Company</h1>
          <div className="flex flex-col font-light text-[12px] gap-4 uppercase">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Environmental Initiatives</a>
            <a href="#" className="hover:underline">Factories</a>
            <a href="#" className="hover:underline">DEI</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">International</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>
        <div className="flex flex-col w-full p-10 gap-4">
          <h1 className="font-bold uppercase text-[12px]">Get Help</h1>
          <div className="flex flex-col font-light text-[12px] gap-4 uppercase">
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Live Chat</a>
            <a href="#" className="hover:underline">Return Policy</a>
            <a href="#" className="hover:underline">Shipping Info</a>
            <a href="#" className="hover:underline">Bulk Orders</a>
          </div>
        </div>
        <div className="flex flex-col w-full p-10 gap-4">
          <h1 className="font-bold uppercase text-[12px]">Connect</h1>
          <div className="flex flex-col font-light text-[12px] gap-4 uppercase">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">TikTok</a>
            <a href="#" className="hover:underline">YouTube</a>
            <a href="#" className="hover:underline">Pinterest</a>
            <a href="#" className="hover:underline">Affiliates</a>
            <a href="#" className="hover:underline">Our Stores</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-10 gap-4">
        <h1 className="font-light text-nowrap">
          Sign up to receive 15% off your first order.
        </h1>
        <form className="flex w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            required
            className="w-full text-black border-none outline-none p-4"
            placeholder="EMAIL ADDRESS"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="flex w-[70px] items-center justify-center bg-black"
          >
            <ArrowRight />
          </button>
        </form>
        <p>
          By providing your email, you agree to receive marketing emails and
          accept our <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms</a>.
        </p>
      </div>
    </div>
  );
}

export default Footernav;
