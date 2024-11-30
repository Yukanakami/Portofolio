import Image from "next/image"; // Ensure this is the correct import
import ImageProfile from "@/res/maheka.jpg";

const Portfolio = () => (
  <section className="py-16 bg-white" id="portfolio">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="shadow-lg rounded-lg overflow-hidden">
            <Image
              src={ImageProfile}
              alt={`Project ${item}`}
              width={500} // Set appropriate width
              height={300} // Set appropriate height
              className="w-full object-cover" // Ensure it fills the container nicely
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">Project {item}</h3>
              <p className="text-sm text-gray-600">
                Brief description of Project {item}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
