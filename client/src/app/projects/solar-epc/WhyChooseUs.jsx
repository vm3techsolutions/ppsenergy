import { Building2, Gauge, TrendingUp, Workflow } from "lucide-react";

export default function WhyChooseUs() {



  const items = [
    {
      icon: <Building2 size={40} className="text-[#889F2D]" />,
      title: "Accurate yield forecasting",
    },
    {
      icon: <Gauge size={40} className="text-[#889F2D]" />,
      title: "End-to-end EPC lifecycle management",
    }
  ];

  return (
    <section className="common-section ">
      <h2 className="center-section-heading text-center">Why Clients Choose Us</h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">

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
