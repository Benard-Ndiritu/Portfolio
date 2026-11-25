import { STACK } from "@/constants";

export default function Stack() {
  return (
    <section
      id="stack"
      className="scroll-mt-4 px-5 pb-28 pt-8 sm:px-8 md:pb-40 lg:px-12"
    >
      <h2 className="display pb-10 text-[clamp(2.5rem,6vw,5.5rem)] md:pb-16">
        Tech Stack
      </h2>

      <dl className="border-t border-line">
        {STACK.map(({ group, items }) => (
          <div
            key={group}
            className="grid gap-3 border-b border-line py-7 md:grid-cols-[12rem_1fr] md:items-baseline md:gap-8 md:py-9"
          >
            <dt className="text-base text-muted md:text-lg">{group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-7 gap-y-2 md:gap-x-12">
                {items.map((item) => (
                  <li
                    key={item}
                    className="stretch-word text-[clamp(1.6rem,3.4vw,3rem)] leading-tight"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
