import Footernav from "@/components/footernav";
import Newestshirt from "@/components/newestshirt";
import PopularShirt from "@/components/popularShirt";
import { Button } from "@/components/ui/button";
import { Lock, Truck, RotateCcw, Pin } from "lucide-react";
function Home() {
  return (
    <>
      <div className="flex w-full h-screen justify-center items-center relative overflow-hidden">
        {/* Background Image */}
        {/* ใช้ absolute inset-0 → ทำให้ div พื้นหลัง ขยายเต็มพื้นที่ ของ parent */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${"images/bg-landing.jpg"})`,
            filter: "brightness(0.3)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Content */}
        <h1 className="flex flex-col text-white relative z-10 gap-10 items-center">
          <p className="font-Libre text-6xl max-lg:text-center max-lg:text-8xl">
            Design your day with Your Cloth
          </p>
          <div>
            <p className=" flex text-center text-white/70 text-xl font-roboto">
              Choose your unique style with clothing that represents you.
            </p>
            <p className=" flex text-center text-white/70 text-xl font-roboto">
              Discover the perfect items and design your look every day.
            </p>
          </div>
          <Button className="font-roboto p-7 bg-transparent border relative hover:bg-white hover:text-black duration-500">
            Views Collections
          </Button>
        </h1>
      </div>

      {/* Section 2 */}
      <div className="flex w-full min-h-screen h-auto bg-[#1c1c1c]">
        <PopularShirt />
      </div>
      {/* Section 3 */}
      <div className="flex w-full h-screen relative overflow-hidden p-[65px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url(${"images/bg-landing-sec2.jpg"})`,
            filter: "brightness(0.3)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="flex flex-col w-1/3 h-fit z-10 ml-[60%] text-white">
          <div className="flex w-full h-full justify-center items-center">
            <img src="images/sec3.jpg" alt="sec3" className="bg-cover" />
          </div>
          <p className="flex flex-col items-center w-full text-4xl text-center font-Libre py-4 gap-4">
            Explore our exquisite Shirt Collection now!
            <Button className="w-1/3 font-light font-roboto p-7 bg-transparent border relative hover:bg-white hover:text-black duration-500">
              Views Collections
            </Button>
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex w-full h-screen bg-white">
          <div className="flex flex-col w-1/2 border justify-center px-[65px] gap-10">
            <p className="uppercase font-medium">Work & Office Attire</p>
            <h1 className="text-7xl font-Libre ">
              Find the Perfect Blazer for You
            </h1>
            <p className="text-black/50 font-medium">
              Discover the ideal blazer that matches your style with our Men's
              Pinstripe Blazer Collection. Combining professional elegance with
              your unique confidence, these tailored pieces elevate your office
              look for any occasion.
            </p>
            <Button className="w-1/3 font-light text-black font-roboto p-7 bg-transparent border relative hover:bg-black hover:text-white duration-500">
              Views Collections
            </Button>
          </div>
          <div className="flex w-1/2 border items-center justify-center max-md:w-1/3">
            <img src="images/sec4.jpg" alt="sec4" className="object-cover max-md:h-full" />
          </div>
        </div>

        <div className="relative flex w-full h-screen pl-[16vh]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: `url(${"images/bg-landing.jpg"})`,
              filter: "brightness(0.3)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          />
          <div className="absolute flex flex-col w-[450px] top-[-50px] gap-4">
            <img src="images/shirt-3.jpg" alt="sec3" className="bg-cover" />
            <h1 className="text-white text-4xl font-Libre ">
              Discover the allure of fashion reinvented!
            </h1>
            <p className="text-white/70 font-medium">
              Dive into a world of style with our latest collection! Shop now
              and redefine your wardrobe narrative!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-screen w-full bg-[#1c1c1c] justify-center">
        <Newestshirt />
      </div>
      <div className="flex w-full h-[33vh] bg-white px-[65px] max-md:flex-col max-md:h-full">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1>
            <Lock />
          </h1>
          <h1 className="font-Libre text-xl">Secure Payments</h1>
          <p className="text-center text-black/50 font-medium">
            Shop with confidence knowing <br /> that your transactions are
            safeguarded.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1>
            <Truck />
          </h1>
          <h1 className="font-Libre text-xl">Free Shipping</h1>
          <p className="text-center text-black/50 font-medium">
            Shopping with no extra charges – <br /> savor the liberty of
            complimentary shipping on every order.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1>
            <RotateCcw />
          </h1>
          <h1 className="font-Libre text-xl">Easy Returns</h1>
          <p className="text-center text-black/50 font-medium">
            With our hassle-free Easy Returns, <br />
            changing your mind has never been more convenient.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1>
            <Pin />
          </h1>
          <h1 className="font-Libre text-xl">Order Tracking</h1>
          <p className="text-center text-black/50 font-medium">
            Stay in the loop with our Order <br /> Tracking feature – from
            checkout to your doorstep.
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full h-screen">
        <div className="relative flex w-full min-h-[65%] justify-center items-center bg-[#1c1c1c]">
          <div className="flex flex-col w-[600px] h-[400px] ml-auto z-10 mx-[65px] text-white justify-center gap-4">
            <p className="uppercase font-medium text-sm">Explore</p>
            <h1 className="font-Libre text-5xl">
              Elevate your wardrobe, embrace timeless style!
            </h1>
            <p>
              Explore our collections today and experience the joy of fashion.
              Shop now for the epitome of chic sophistication!
            </p>
            <Button className="w-1/3 font-light text-white font-roboto p-7 bg-transparent border relative hover:bg-white hover:text-black duration-500">
              Views Collections
            </Button>
          </div>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: `url(${"images/bg-landing.jpg"})`,
              filter: "brightness(0.3)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          />
        </div>
        {/* Footer Details */}
        <div className="flex w-full h-full justify-center items-center bg-[#1c1c1c]">
            <Footernav/>
        </div>
      <footer className="text-center p-2">
        Copyright © 2025 YourCloth | Powered by Tony219y
      </footer>
      </div>
    </>
  );
}

export default Home;
