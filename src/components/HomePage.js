import Features from "./Features";
import PhoneNumber from "./PhoneNumber";
import PreFooter from "./PreFooter";
import Stats from "./Stats";
import Footer from "./Footer";
import StickyInputBar from "./StickyInputBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import '../styles/index.scss';


const HomePage = () => {
  const isMobile = useSelector((state) => state.resolution.isMobile);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = isMobile ? 1 : 400
    if (scrollY >= threshold) {
      setTimeout(() => { document.getElementById('a1').classList.add("active"); }, 500);
      setTimeout(() => { document.getElementById('a2').classList.add("active"); }, 1000);
      setTimeout(() => { document.getElementById('a3').classList.add("active"); }, 1500);
      setTimeout(() => { document.getElementById('a4').classList.add("active"); }, 2000);
      setTimeout(() => { document.getElementById('scroll-arrow').classList.add("active"); }, 2500);
    }
    const pcStickyBar = document.getElementById('stubborn-input');
    if (!!pcStickyBar) {
      if (scrollY >= threshold + 300) {
        pcStickyBar.classList.add("active");
      }
      if (scrollY < threshold + 300) {
        pcStickyBar.classList.remove("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <PhoneNumber />
      <Stats />
      <Features />
      <PreFooter />
      <Footer />
      {!isMobile && <StickyInputBar />}
    </>
  );
};

export default HomePage;
