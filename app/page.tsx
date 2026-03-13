
import Image from 'next/image';
import { portfolioData } from '@/component/portfolioData';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-3 py-10">
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">{portfolioData.name}</h1>
          <p className="text-xl text-slate-400 mb-6">{portfolioData.role}</p>
          <div className="flex gap-4">  
          <button className="bg-blue-600 px-6 py-2 rounded-md">
          <a href="/resume.pdf" download="Kazeem_Hassan_Resume.pdf" className="border border-slate-700 text-slate-300 px-6 py-2 rounded-md hover:bg-slate-800 transition">View my Resume</a>
          </button>
         <button className="bg-blue-600 px-6 py-2 rounded-md">
          <a href="/contact"  className="border border-slate-700 text-slate-300 px-6 py-2 rounded-md hover:bg-slate-800 transition">Contact Me</a>
          </button>
          </div>
        </div>
        <div className="relative w-64 h-64">
          <Image 
            src="/photo.jpg" 
            alt="Professional Headshot" 
            fill 
            className="rounded-2xl object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </section>
 {/* Stack Grid */}
      <section className="mt-4">
        <h2 className="text-3xl font-bold mb-10">Tech Stacks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.techStack.backend.map((acc, i) => (
            <div key={i} className="p-1 bg-blue-600 border border-slate-400 rounded-xl">
              <span className="text-slate-300 font-mono text-sm ">{acc}</span>
              {/* <h3 className="text-xl font-semibold mt-2">{acc.frontend}</h3>
              <p className="text-slate-400 mt-2">{acc.cloud}</p> */}
            </div>
          ))}
        </div>
      </section>
      {/* Accomplishments Grid */}
      <section className="mt-4">
        <h2 className="text-3xl font-bold mb-10">Key Accomplishments</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.accomplishments.map((acc, i) => (
            <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
              <span className="text-blue-500 font-mono text-sm uppercase">{acc.metric}</span>
              <h3 className="text-xl font-semibold mt-2">{acc.title}</h3>
              <p className="text-slate-300 mt-2">{acc.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}




// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
