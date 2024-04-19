import Link from "next/link";

export const Sidebar = () => {
  return (
    <>
      <aside className="sticky top-0 flex flex-col gap-4 p-10 border-r-2 w-2xl sidebar border-zinc-900 min-h-dvh max-xl:hidden">
        <div className="sidebar-section">
          <p className="text-sm font-bold uppercase">INFO</p>
          <ul>
            <li>
              <span className="text-sm opacity-60">Stay updated </span>
              <Link
                className="text-sm blue-link"
                href="https://x.com/hextastudio"
                target="_blank"
              >
                @HextaStudio
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="text-sm font-bold uppercase">Resources</p>
          <ul>
            <li>
              <Link
                className="text-sm transition-all opacity-60 hover:opacity-90 "
                href="/docs/resources/install-next"
              >
                Install Next.js
              </Link>
            </li>
            <li>
              <Link
                className="text-sm transition-all opacity-60 hover:opacity-90 "
                href="/docs/resources/install-tailwind"
              >
                Install Tailwind CSS
              </Link>
            </li>
            <li>
              <Link
                className="text-sm transition-all opacity-60 hover:opacity-90 "
                href="/docs/resources/install-gsap"
              >
                Install GSAP
              </Link>
            </li>
            <li>
              <Link
                className="text-sm transition-all opacity-60 hover:opacity-90 "
                href="/docs/resources/install-framer-motion"
              >
                Install Framer Motion
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-section">
          <p className="text-sm font-bold uppercase">All Components</p>
          <ul>
            <li>
              <Link className="text-sm opacity-60" href="#">
                Magnetic button
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};