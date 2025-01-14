import Hero from '@/components/section/Hero';
import About from '@/components/section/About';
import Skill from '@/components/section/Skill';
import TimelineSection from '@/components/section/TimelineSection';

export default function Home() {
  return (
    <div className='w-full'>
        <Hero />
        <About />
        <Skill />
        <TimelineSection />
    </div>
  );
}
