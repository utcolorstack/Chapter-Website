import Image from "next/image";

const sponsors = [
  { name: "Accenture", logo: "/logos/accenture.png" },
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "J.P. Morgan", logo: "/logos/jp-morgan.png" },
  { name: "Paycom", logo: "/logos/paycom.png" },
];

export function Sponsors() {
  return (
    <section id="sponsors" className="px-4">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold sm:text-3xl">Proudly supported by</h2>
          <a href="#newsletter" className="text-sm text-primary underline-offset-4 hover:underline">
            Become a sponsor
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="flex aspect-[3/2] items-center justify-center overflow-hidden rounded-lg border bg-secondary p-6 sm:p-8"
            >
              <Image
                src={s.logo}
                alt={s.name}
                width={220}
                height={100}
                className="h-auto w-full max-w-[180px] object-contain opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


