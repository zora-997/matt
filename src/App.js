import Navbar from './layouts/Navbar';
import { LanguageContext } from '../src/Context/LanguageContext';
import  { useContext } from 'react';
import { Footer } from './layouts/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/appRoutes';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';





function App() {
  const { language } = useContext(LanguageContext);

  // // loading page
  // const [isLoading, setIsLoading] = useState(true);

  //   useEffect(() => {
  //       // Simulate data fetching
  //       setTimeout(() => {
  //           setIsLoading(false);
  //       }, 3000); // Replace with your actual data fetching logic
  //   }, []);

  return (
    <div className={`    ${language!=='en'?'font-arfont':''}`} dir={`${language === 'en'?'ltr':'rtl'}`}>
       {/* {isLoading ? <Loader /> : ( )} */}
                <BrowserRouter>
                    <Navbar />
                    <AppRoutes />
                    <Footer />
                </BrowserRouter>
           
    </div>
  );
}

export default App;
