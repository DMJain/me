import Hero from '@/components/section/Hero';
import About from '@/components/section/About';
import Skill from '@/components/section/Skill';
import TimelineSection from '@/components/section/TimelineSection';
import ProjectsSection from '@/components/section/Project'
import ContactSection from '@/components/section/contact';

export default function Home() {
  return (
    <div className='w-full'>
        <Hero />
        <About />
        <Skill />
        <TimelineSection />
        <ProjectsSection />
        <ContactSection />
    </div>
  );
}
