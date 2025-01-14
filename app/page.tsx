import Hero from '@/components/section/Hero';
import About from '@/components/section/About';
import Skill from '@/components/section/Skill';

export default function Home() {
  return (
    <div className='w-full'>
        <Hero />
        <About />
        <Skill />
    </div>
  );
}
