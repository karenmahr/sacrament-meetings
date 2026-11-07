import Image from "next/image";
export default function HomePage() {
  return (
  <main className="p-8">
    <h1>Sacrament Meetings Planner</h1>
    
    <Image
    src="/hero.png"
    alt="Interior of chapel for sacrament meeting"
    width={800}
    height={400}
    />
    </main>
    );
  }