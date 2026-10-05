import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export interface CompanyData {
  name: string;
  url: string;
  tagline: string;
  summary: string[];
  products: { name: string; description: string }[];
  industries: string[];
  clients: string[];
  lexington: string;
}

export const Company: React.FC<{ company: CompanyData }> = ({ company }) => {
  return (
    <section className="p-6 my-8 rounded-lg bg-accent ring ring-primary drop-shadow-2xl">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-4xl font-bold">{company.name}</h2>
          <p className="mt-1 text-xl">{company.tagline}</p>
        </div>
        <a
          href={company.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-xl duration-150 border border-b-2 rounded-full shadow-xl bg-primary/50 border-white/25 backdrop-blur-sm hover:scale-110 hover:border-text"
        >
          <FaArrowUpRightFromSquare />
          Visit website
        </a>
      </div>

      <div className="mt-6 space-y-4">
        {company.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mt-6 mb-2 text-2xl font-bold">Products</h3>
      <ul className="pl-6 space-y-1 list-disc">
        {company.products.map((product) => (
          <li key={product.name}>
            <span className="font-bold">{product.name}</span> –{" "}
            {product.description}
          </li>
        ))}
      </ul>

      <h3 className="mt-6 mb-2 text-2xl font-bold">Industries</h3>
      <p>{company.industries.join(", ")}</p>

      <h3 className="mt-6 mb-2 text-2xl font-bold">Some of their clients</h3>
      <p>{company.clients.join(", ")}</p>

      <h3 className="mt-6 mb-2 text-2xl font-bold">In Lexington</h3>
      <p>{company.lexington}</p>
    </section>
  );
};
