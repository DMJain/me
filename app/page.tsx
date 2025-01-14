import Hero from '@/components/section/Hero';
import About from '@/components/section/About';

export default function Home() {
  return (
    <div className='w-full flex-center flex-col'>
        <Hero />
        <About />
    </div>
  );
}
