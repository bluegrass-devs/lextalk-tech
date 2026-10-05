import { Company, CompanyData } from "./components/Company";

const companies: CompanyData[] = [
  {
    name: "CABEM Technologies",
    url: "https://www.cabem.com/",
    tagline: "Custom software for highly regulated industries, for 24 years.",
    summary: [
      "CABEM builds enterprise software for organizations that need precision and accountability. They mostly write custom solutions for highly regulated industries, and they also offer a handful of ready-to-deploy products focused on workforce competency management and compliance.",
      "Beyond software development, CABEM provides consulting and implementation support, product integrations, and cloud adoption services, with flexible hosting on-premises or in the cloud.",
    ],
    products: [
      {
        name: "Competency Manager",
        description: "workforce compliance and skills measurement platform",
      },
      {
        name: "CJIS Manager",
        description: "audit tracking for regulated environments",
      },
      {
        name: "Mentoring Module",
        description: "mentoring management system",
      },
      {
        name: "Livia Development Framework",
        description: "proprietary library used to build custom solutions",
      },
    ],
    industries: [
      "Healthcare",
      "Manufacturing",
      "Law enforcement",
      "Government",
      "Education",
    ],
    clients: [
      "Harvard Medical School",
      "Motorola",
      "Axon",
      "Dana-Farber",
      "UMass Chan",
      "Kansas State University",
    ],
    lexington:
      "CABEM has an office in Lexington and a remote-first culture that extends their footprint across the country. They have front-end and back-end developers (Jr., Sr., and Lead) in the Lexington area, as well as some company leadership.",
  },
];

export default function Spotlight() {
  return (
    <div className="max-w-screen-lg px-4 mx-auto font-montserrat">
      <div className="p-4 mx-auto my-10 text-center rounded-lg bg-accent w-fit ring ring-primary drop-shadow-2xl">
        <h1 className="text-5xl font-bold">Spotlight</h1>
        <span className="text-xl">Tech companies right here in Lexington</span>
      </div>
      {companies.map((company) => (
        <Company key={company.name} company={company} />
      ))}
    </div>
  );
}
