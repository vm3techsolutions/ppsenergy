import { Ruler,
  FileCog,
  HardHat } from "lucide-react";

export default function WhyChooseUs() {

  const items = [
    {
      icon: <Ruler size={40} className="text-[#889F2D]" />,
      title: "Engineering precision",
    },
    {
      icon: <FileCog size={40} className="text-[#889F2D]" />,
      title: "Regulatory compliant designs",
    },
    {
      icon: <HardHat size={40} className="text-[#889F2D]" />,
      title: "Optimized for safety & efficiency",
    }
  ];

  return (
    <section className="common-section ">
      <h2 className="center-section-heading text-center">Why clients choose us</h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-4xl mx-auto">

        {items.map((item, index) => (
          <div 
            key={index}
            className="p-6 bg-white rounded-[10px] shadow-[2px_2px_10px_rgba(0,0,0,0.3)]  hover:shadow-[0_0_15px_#889F2D] transition"
          >
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>
            <p className="text-center bulletPoints">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
