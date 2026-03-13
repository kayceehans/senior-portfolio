import Image from 'next/image';
import { portfolioData } from '@/component/portfolioData';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">{portfolioData.name}</h1>
          <p className="text-xl text-slate-400 mb-6">{portfolioData.role}</p>
          <div className="flex gap-4">
            <button className="bg-blue-600 px-6 py-2 rounded-md">View his Resume</button>
            <button className="border border-slate-700 px-6 py-2 rounded-md">Contact Me</button>
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

      {/* Accomplishments Grid */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold mb-10">Key Accomplishments</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.accomplishments.map((acc, i) => (
            <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
              <span className="text-blue-500 font-mono text-sm uppercase">{acc.metric}</span>
              <h3 className="text-xl font-semibold mt-2">{acc.title}</h3>
              <p className="text-slate-400 mt-2">{acc.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
