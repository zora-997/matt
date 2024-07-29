import Navbar from './layouts/Navbar';
import { LanguageContext } from '../src/Context/LanguageContext';
import  { useContext } from 'react';
import { Footer } from './layouts/Footer';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/appRoutes';





function App() {
  const { language } = useContext(LanguageContext);
  return (
    <div className={`    ${language!=='en'?'font-arfont':''}`} dir={`${language === 'en'?'ltr':'rtl'}`}>
      <BrowserRouter>
        <Navbar/>
         <AppRoutes />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
