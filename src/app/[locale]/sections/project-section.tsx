import { style } from "@/config";
import { twMerge } from "tailwind-merge";
import ProjectContainer from "./components/project-container";

export default function ProjectSection() {
  const PROJECTS = [
    {
      title: "CountryScape",
      description:
        "Countryscape offers a selection of hotels with stunning views that perfectly match your mood and emotions, providing a tailored vacation experience. Whether you're seeking relaxation, adventure, or a peaceful retreat, each hotel is designed to enhance your stay. With easy booking options, planning your ideal getaway has never been more convenient.",
    },
    {
      title: "Food Delivery App",
      description:
        "Food Delivery and Transportation App that offers efficient services for food delivery, as well as transportation for people and goods. It allows users to manage their time better by eliminating the need to leave their home, office, or school for tasks like shopping or collecting items. Additionally the app offers secure and well monitored deliveries, ensures safe transportation and exclusive travel to destinations.",
    },
    {
      title: "Web App",
      description:
        "The networking website offers a curated selection of exclusive products, available only through the platform. Focused on health and wellness, the products are carefully chosen to support a balanced lifestyle and promote well-being. Users can access unique items in medicine, supplements, and wellness tools, ensuring they have access to top-quality resources for better health.",
    },
    {
      title: "Logistics",
      description:
        "Logistics solutions provide streamlined services for the transportation of goods and resources, optimizing delivery efficiency for businesses and customers alike. The platform allows users to manage their operations seamlessly, reducing the need for time-consuming tasks like coordinating shipments or handling inventory. With secure and reliable tracking systems, it ensures safe and punctual delivery, offering smooth transportation from point A to point B.ess to top-quality resources for better health.",
    },
  ];

  return (
    <section
      id="project-section"
      className={twMerge(
        "h-full relative space-y-20",
        style.sectionContainerPaddingX
      )}
    >
      <h1 className="text-h2 text-woodsmoke-600 dark:text-woodsmoke-50 text-center font-bold">
        Projects
      </h1>

      {PROJECTS.map((project, index) => (
        <ProjectContainer
          key={index}
          title={project.title}
          description={project.description}
          index={index}
        />
      ))}
    </section>
  );
}
