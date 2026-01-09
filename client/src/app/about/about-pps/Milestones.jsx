import { motion } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Milestones() {

  const milestoneData = [
    "2009: Established as a consultancy firm focused on the energy and power sector.",
    "2010: Secured major clients in energy auditing and power sector advisory services.",
    "2015: Awarded primary data collection projects, strengthening analytical and field capabilities.",
    "2020: Launched the Legal vertical to support regulatory, compliance, and techno-legal services.",
    "2025: Expanded into solar energy and allied renewable energy projects.",
  ];

  return (
     <section className='common-section flex flex-col justify-center items-center '>
      <h3 className="title text-[#889F2D] mb-6">Milestones at a Glance</h3>

      {/* center line */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 "></div>

      <div className="space-y-10">
        {milestoneData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`relative flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-[45%] bg-[#f7f7f7] p-5 rounded-xl shadow-md">

              <p className="text-[#7B0000] font-medium flex gap-2">
                <FaAngleDoubleRight className="mt-1" />
                {item}
              </p>

            </div>

            {/* timeline dot */}
            <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-[#7B0000] border-4 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
