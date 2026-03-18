import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import WorkflowNodes from './sections/WorkflowNodes';
import StoryboardPreview from './sections/StoryboardPreview';
import EmotionMusic from './sections/EmotionMusic';
import JsonExport from './sections/JsonExport';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WorkflowNodes />
        <StoryboardPreview />
        <EmotionMusic />
        <JsonExport />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
