import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex items-center justify-center bg-red mt-20">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-3xl mt-100">
        <div className="bg-white p-10 shadow-lg rounded-lg mb-6 text-center">
          <h2 className="text-2xl font-bold mc-4 text-center p-3 mt-3">Sporting</h2>
          <p className="mc-4 p-3">
          Sports: a lifestyle and health for body and mind
          Sport is not just a physical activity that some people practice in their free time, but rather a lifestyle that can greatly affect physical and psychological health. By exercising regularly, you can improve your quality of life and increase your overall level of happiness. Below is a comprehensive look at the importance of sports and its role in daily life.
          </p>
          <Link href="/foot" className="text-blue-500 p-3 text-center bg-green">
          <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              View
          </button>
          </Link>
        </div>

        <div className="bg-white p-10 shadow-lg rounded-lg mb-6 text-center">
          <h2 className="text-2xl font-bold mc-4 text-center p-3 mt-3">News</h2>
          <p className="mc-4 p-3">
          News: a window to the world and a tool for shaping awareness
          News is one of the most important tools that people rely on to follow events and understand what is happening around them in the world. Whether it is local or international news, it helps individuals keep up with political, economic, social, and even cultural developments. The news is diverse to include different areas such as sports, economics, weather, technology, and others, making it a comprehensive source of information.
          </p>
          <Link href="/new" className="text-blue-500 p-3 text-center bg-green">
          <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              View
          </button>
          </Link>
        </div><div className="bg-white p-10 shadow-lg rounded-lg mb-6 text-center">
          <h2 className="text-2xl font-bold mc-4 text-center p-3 mt-3">Education</h2>
          <p className="mc-4 p-3">
          Education: the basis for building the future and developing societies
          Education is one of the most important pillars on which the progress and development of nations depends. It is the foundation on which individuals build their skills and knowledge to be able to face life's challenges. Education is not only limited to transmitting information, but rather is a comprehensive process that aims to build the individual’s personality and develop his intellectual, social, and skill capabilities. Hence, the role of education goes beyond the individual to reach society as a whole, where it has a significant impact in promoting development and prosperity.
          </p>
          <Link href="/ed" className="text-blue-500 p-3 text-center bg-green">
          <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              View
          </button>
          </Link>
        </div>
        
      <footer>
        <div className="mt-5 text-center mb-10">
          <h1>@@@@@@@@@@@@@@               AhmedRamdan             @@@@@@@@@@@@@@</h1>
        </div>
      </footer>
      </div>
        
    </div>
  );
}