import { experience } from "../constants/experience";
import { Experience } from "../types/types";

export default function ExperienceSection() {
  return (
    <div id="Projects" className="px-4 flex flex-col md:px-24 py-24 my-24">
      <span className="text-3xl font-semibold text-[rgb(166,112,254)] md:text-6xl">
        Projects & Experience
      </span>
      {experience.map((v, i) => {
        return <ExperienceCard key={i} data={v} />;
      })}
    </div>
  );
}

interface ExperienceCardProps {
  data: Experience;
}

function ExperienceCard({ data }: ExperienceCardProps) {
  return (
    <div className="my-14">
      <div className="items-center md:flex justify-between">
        <span className="text-base font-semibold drop-shadow-xl text-white md:text-2xl">
          {data.title} | {data.company}
        </span>
        <span className="font-semibold md:text-2xl">
          {data.start} - {data.end}
        </span>
      </div>
      <div className="px-6 text-justify">
        <ul className=" list-disc">
          {data.bullets.map((v, i) => (
            <li key={i} className="text-sm md:text-xl">
              {v}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded mt-5 md:carousel">
        {data.images.map((v, i) => (
          <div
            key={i}
            className={`carousel-item ${
              data.mobile ? "mx-16" : "mx-10"
            } my-5 md:my-0`}
          >
            <img
              src={`/${v}`}
              alt="experience image"
              width={data.mobile ? 300 : 500}
              height={data.mobile ? 500 : 300}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
