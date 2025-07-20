import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedForms from '../components/FeaturedForms';
import ResultsList from '../components/ResultsList';
import AdmitCardsList from '../components/AdmitCardsList';
import LatestJobsList from '../components/LatestJobsList';
import AnswerKeyList from '../components/AnswerKeyList';
import DocumentsList from '../components/DocumentsList';
import AdmissionsList from '../components/AdmissionsList';
import InfoSections from '../components/InfoSections';
import FAQ from '../components/FAQ';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <div className="content-wrapper">
        <main className="main-content">
          <FeaturedForms />
          <ResultsList />
          <AdmitCardsList />
          <LatestJobsList />
          <AnswerKeyList />
          <DocumentsList />
          <AdmissionsList />
          <InfoSections />
          <FAQ />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};

export { Home };
