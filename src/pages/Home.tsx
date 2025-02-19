// import bgImage from "@/assets/bg-landing.jpg"; 
import PopularShirt from "@/components/popularShirt";
function Home() {
  return (
    <>
      <div className="flex w-full h-screen justify-center items-center overflow-hidden ">
        {/* Background Image */}
        {/* ใช้ absolute inset-0 → ทำให้ div พื้นหลัง ขยายเต็มพื้นที่ ของ parent */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed max-lg:bg-scroll"
          style={{ backgroundImage: `url(${'images/bg-landing.jpg'})`,
          filter: 'brightness(0.3)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          maxWidth: '100vw',
          maxHeight: '100vh',
         }}
        />

        {/* Content */}
        <h1 className="text-white relative z-10">sec1</h1>
        {/* ทำยังไงดี */}
        {/* <img src="images/bg-landing.jpg" alt="bg-landing" className="w-full h-screen bg-cover bg-no-repeat bg-fixed" /> */}
      </div>

      {/* Section 2 */}
      <div className="flex w-full min-h-screen h-auto bg-[#1c1c1c]">
          <PopularShirt/>
      </div>
    </>
  );
}

export default Home;
