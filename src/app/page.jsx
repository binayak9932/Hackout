import Image from "next/image";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";
import Healthcheck from 'public/health.png'
import Map from '/public/location.png'
import LoginImage from '/public/login.png'
import Dash from '/public/dashh.png'

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-r from-black to-teal-800"style={{ height: "90vh" }}>
      <div className="flex items-center gap-20 mx-10 py-32">
        <div className="flex-1 flex flex-col gap-9">
        <h1 className=" py-10 text-6xl sm:text-9xl bg-gradient-to-b from-blue-900 via-blue-500 to-white 
        text-transparent bg-clip-text font-bold text-center sm:text-left" >
  Your health checkup <br />at the palm of <br /> your hand
</h1>
        <div className="mx-100px"style={{ marginLeft: "30vw" }}>
          
          <Button url="/about" text="How do we work"  />
          </div>
        </div>
      </div>
      </div>
      <div className="shadow-md shadow-lg bg-gradient-to-br from-black to-teal-800 text-white">
  <div className="text h-56 flex flex-col justify-center items-center" style={{ marginLeft: "100px" }}>
    <div className="text-white text-6xl sm-7xl font-pacifico font-semibold">
      How   S w a a s t h S a t h i    works
    </div>
  </div>
<div className=" p-20 flex flex-col-reverse justify-between items-center sm:flex-row">
  <div className="w-full sm:w-1/3">
    <Image src={Dash} alt="" className=" w-full h-full object-contain" />
  </div>
  <div className="w-full sm:w-2/3 text-center sm:text-left sm:mx-6 text-xl sm:text-4xl mb-4">
    You can access your dashboard, after logging in where you can have various options to access our features
  </div>
</div>
<div className=" p-20 flex flex-col-reverse justify-between items-center sm:flex-row">
  <div className="w-full sm:w-2/3 text-center sm:text-left sm:mx-6 text-xl sm:text-4xl mb-4">
    They can go to their dashboard and go to health checkup, enter their symptoms and see the probable health issues
  </div>
  <div className="w-full sm:w-1/3">
    <Image src={Healthcheck} alt="" className="w-full h-96 object-contain" />
  </div>
</div>

<div className=" p-20 flex flex-col-reverse justify-between items-center sm:flex-row">
  <div className="w-full sm:w-1/3">
    <Image src={Map} alt="" className="w-full h-96 object-contain" />
  </div>
  <div className="w-full sm:w-1/2 mx-4 text-center sm:text-left text-2xl">
    Based on your location, our platform also shows you nearby health centres on the map
  </div>
</div>
</div>



    </div>
  );
}
