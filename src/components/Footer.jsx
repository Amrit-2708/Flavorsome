
const Footer = () => {
  return (
    <>
      <footer className="bg-white text-black py-4 flex flex-col md:flex-row justify-between px-8 py-3">
        <div className="flex gap-2 mt-2 items-center justify-center">
          <img
            src="/logo.png"
            alt="logo.png"
            className="w-[4vw] mix-blend-multiply"
          />
          <h1
            className="text-3xl font-bold"
            style={{ fontFamily: "Papyrus" }}
          >
            Contact Us
          </h1>
        </div>
        <div className="md:mt-0 mt-5">
          <div className="flex flex-row justify-center items-center mt-2">
            <img className="w-[4vw]" src="/phone.png" alt="" />
            <p className="ml-1">+91 123456789</p>
          </div>
        </div>
        <div className="md:mt-0 mt-5">
          <div className="flex flex-row justify-center items-center mt-2">
            <img className="w-[4vw]" src="/email.png" alt="" />
            <p className="ml-1">Flavorsome@gmail.com</p>
          </div>
        </div>
      </footer>
      <div className="bg-white py-4 flex flex-row md:flex-row justify-center">
        <div className="mb-2">
          &copy; 2024 Your Food Order Website. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
