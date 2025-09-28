import SectionHeaders from "./SectionHeaders";
import education from "../assets/education.svg";
import { motion } from "motion/react";
import graduation from "../assets/graduation.svg";

export default function About() {
  const educations = [
    {
      standard: "Graduation",
      year:"2018 - 2021",
      address: "Spicer Adventist University, Pune, Maharashtra",
    },
    {
      standard: "12th",
      year: "2016 - 2018",
      address: "Raymond Memorial Hig. Sec. School, Falakata, West-Bengal",
    },
    { 
        standard: "10th",
        year: "2016",
        address: "Maringmi Memorial School, Ukhrul, Manipur" }
  ];

  return (
    <section className="max-w-[1240px] mx-auto py-15 overflow-hidden">
      <SectionHeaders text="About Me" />

      <div className="md:flex justify-around items-center py-15">
        <div className="">
          <img
            src={graduation}
            alt="graduation pic"
            className="w-[400px] h-[400px]"
          />
        </div>

        <dl className="grid gap-4 px-2">
          {educations &&
            educations.map((education, index) => {
              const { standard, year, address } = education;

              return (
                <motion.div
                  key={index}
                  className="p-5 shadow-2xl grid gap-3 bg-white/5 rounded backdrop-blur-sm"
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <dt className="font-bold">
                    <span className="text-2xl">{standard}</span> - ( {year} )
                  </dt>
                  <div className="border w-[30%]"></div>
                  <dd>{address}</dd>
                </motion.div>
              );
            })}
        </dl>
      </div>
    </section>
  );
}
