import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/pages/components/CodeBlock";

const InstallTailwind = () => {
  return (
    <>
      <DocsLayout>
        <main>
          <h1 className="h1">Install Tailwind CSS</h1>
          <p className="opacity-80">Install Tailwind CSS with Next.js</p>
          <div className="flex flex-col gap-4 py-10">
            <div>
              <h3 className="h3">Create Next.Js Project</h3>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npx create-next-app@latest my-project --typescript --eslint
cd my-project`}
              />
            </div>
            <div>
              <h3 className="h3">Install Tailwind CSS</h3>
              <CodeBlock
                lang="bash"
                filename="bash"
                code={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
              />
            </div>
            <div>
              <h3 className="h3">Configure your template paths</h3>
              <CodeBlock
                lang="javascript"
                filename="tailwind.config.ts"
                code={`/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using src directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    extend: {},
    },
    plugins: [],
};`}
              />
            </div>
            <div>
              <h3 className="h3">Add the Tailwind directives to your CSS</h3>
              <CodeBlock
                lang="css"
                filename="globals.css"
                code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
              />
            </div>
            <div>
              <h3 className="h3">Start the build process</h3>
              <CodeBlock lang="bash" filename="bash" code={`npm run dev`} />
            </div>
            <div>
              <h3 className="h3">Have fun with Tailwind 🎉</h3>
              <CodeBlock
                lang="javascript"
                filename="index.tsx"
                code={`export default function Home() {
    return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}`}
              />
            </div>
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default InstallTailwind;