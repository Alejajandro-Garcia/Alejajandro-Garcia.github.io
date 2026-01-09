import { techStacks } from "../constants/techstack";

export default function SkillsSection() {
  return (
    <div
      className="flex flex-col pb-24 mb-24 px-4 md:px-24 md:mb-0"
      id="skills-section"
    >
      <span className="text-3xl font-semibold text-[#A670FE] md:text-6xl">
        Technologies
      </span>
      {Object.entries(techStacks).map((value, index) => (
        <SkillsCard key={index} techstack={value[0]} stack={value[1]} />
      ))}
    </div>
  );
}

interface SkillsCardProps {
  techstack: string;
  stack: string[];
}

function SkillsCard({ techstack, stack }: SkillsCardProps) {
  return (
    <div className="text-center py-12 flex flex-col">
      <span className="text-xl font-semibold text-white md:text-3xl">
        {techstack}
      </span>

      <div className="flex gap-4 mt-6 text-white flex-wrap justify-center">
        {stack.map((tech, i) => (
          <div
            key={i}
            className="p-2 rounded-full text-sm bg-purple-400 bg-opacity-25 md:text-lg"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}
