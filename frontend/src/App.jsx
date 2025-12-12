import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Sev from "./component/Servicese/ServicesSection";
import Preloader from "./component/prelo/Preloader";
import Home from "./component/Home/hime";
import Contact from "./component/Contactus/Contact";
import Portfalo from "./component/protfalio/Portfolio";
import Rewiw from "./component/Reviews/Reviews";

import ReserveForm from "./component/Reservation/ReserveForm";


import Lahirukawshi from "./component/pages/DarveeniaHuechen";
import BashiDehemi from "./component/pages/Bashidehemi";
import Tharindunilmi from "./component/pages/Tharindunilmi";
import Wenurakawshya from "./component/pages/WenuraKawshaya";
import ChamikaNipuni from "./component/pages/ChamikaNipuni";
import Nilame from "./component/pages/nilame";
import Kushanchamini from "./component/pages/Kasunchamini";
import Chamthshashini from "./component/pages/Chamathshashini";
import Supunakesha from "./component/pages/Supunakesha";
import Noname from "./component/pages/noname";
import Sachinthachami from "./component/pages/shachinthachami";
import Nipunichamika from "./component/pages/nipunichamika";
import Kavindurukshi from "./component/pages/kavindurukshi";
import DinuruNiduli from "./component/pages/DinuruNiduli";
import Shashinichamath from "./component/pages/shashinichamath";
import Bride from "./component/pages/bride";
import Dulaj from "./component/pages/dulajmadushani";


import ReviewDetail from "./component/Rewans/ReviewDetail";

import Details from "./component/pagee/pages"; 






import Madushan from "./component/rewiewcomponent/TestimonialSection";
import Thimasha from "./component/rewiewcomponent/rwSection2";
import Ravindu from "./component/rewiewcomponent/Section3";
import Dedunu from "./component/rewiewcomponent/Section4";
import Dinupa from "./component/rewiewcomponent/Section5";
import Kawshi from "./component/rewiewcomponent/Section6";
import Malith from "./component/rewiewcomponent/Section7";
import Sachintha from "./component/rewiewcomponent/Section8";
import Hashara from "./component/rewiewcomponent/Section9";
import Amasha from "./component/rewiewcomponent/Section10";
import Gayani from "./component/rewiewcomponent/Section11";
import Nalaka from "./component/rewiewcomponent/Section12";
import Sanduni from "./component/rewiewcomponent/Section13";
import Thisaranga from "./component/rewiewcomponent/Section14";
import Rahal from "./component/rewiewcomponent/Section15";




function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className="App">
          <Header /> {/* Always visible */}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Sev />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfalo />} />
            <Route path="/reviews" element={<Rewiw />} />
            <Route path="/home" element={<Home />} />

            <Route path="/lahirukawshi" element={<Lahirukawshi />} />
        <Route path="/bashiDehemi" element={<BashiDehemi />} />
        <Route path="/tharindunilmi" element={<Tharindunilmi />} />
        <Route path="/wenurakawshya" element={<Wenurakawshya />} />
        <Route path="/chamika-Nipuni" element={<ChamikaNipuni/>}/>
        <Route path= "/nilame" element={<Nilame/>}/>
         <Route path= "/kushanchamini" element={<Kushanchamini/>}/>
         <Route path= "/chamthshashini" element={<Chamthshashini/>}/>
         <Route path= "/supunakesha" element={<Supunakesha/>}/>
         <Route path= "/noname" element={<Noname/>}/>
         <Route path= "/sachinthachami" element={<Sachinthachami/>}/>
         <Route path= "/nipunichamika" element={<Nipunichamika/>}/>
         <Route path= "/kavindurukshi" element={<Kavindurukshi/>}/>
         <Route path= "/dinuruNiduli" element={<DinuruNiduli/>}/>
         <Route path= "/shashinichamath" element={<Shashinichamath/>}/>
         <Route path= "/bride" element={<Bride/>}/>
         <Route path= "/dulaj" element={<Dulaj/>}/>









      <Route path="/review-detail" element={<ReviewDetail />} />

      <Route path="/reserve" element={<ReserveForm />} />

       <Route path="/details" element={<Details />} />

       <Route path="/madushan" element={<Madushan />} />
       <Route path="/thimasha" element={<Thimasha />} />
       <Route path="/ravindu" element={<Ravindu />} />
        <Route path="/dedunu" element={<Dedunu />} />
        <Route path="/dinupa" element={<Dinupa />} />
        <Route path="/kawshi" element={<Kawshi />} />
        <Route path="/malith" element={<Malith />} />
        <Route path="/sachintha" element={<Sachintha />} />
        <Route path="/hashara" element={<Hashara />} />
        <Route path="/amasha" element={<Amasha />} />
        <Route path="/gayani" element={<Gayani />} />
        <Route path="/nalaka" element={<Nalaka />} />
        <Route path="/sanduni" element={<Sanduni />} />
        <Route path="/thisaranga" element={<Thisaranga />} />
        <Route path="/rahal" element={<Rahal />} />
       {/*<Route path="/text" element={<Text1 />} />
       <Route path="/text" element={<Text2 />} />
       <Route path="/text" element={<Text3 />} />
       <Route path="/text" element={<Text4 />} />
       <Route path="/text" element={<Text5 />} />
       <Route path="/text" element={<Text6 />} />
       <Route path="/text" element={<Text7 />} />
       <Route path="/text" element={<Text8 />} />
       <Route path="/text" element={<Text9 />} />
       <Route path="/text" element={<Text10 />} />
       <Route path="/text" element={<Text11 />} />
       <Route path="/text" element={<Text12 />} />
       <Route path="/text" element={<Text13 />} />
       <Route path="/text" element={<Text14 />} />
       import Texta from "./component/rewiewcomponent/rwSection2";
import Textb from "./component/rewiewcomponent/Section3";
import Textc from "./component/rewiewcomponent/Section4";
import Textd from "./component/rewiewcomponent/Section5";
import Texte from "./component/rewiewcomponent/Section6";
import Textf from "./component/rewiewcomponent/Section7";
import Textg from "./component/rewiewcomponent/Section8";
import Texth from "./component/rewiewcomponent/Section9";
import Texti from "./component/rewiewcomponent/Section10";
import Textj from "./component/rewiewcomponent/Section11";
import Textk from "./component/rewiewcomponent/Section12";
import Textl from "./component/rewiewcomponent/Section13";
import Textm from "./component/rewiewcomponent/Section14";
import Textn from "./component/rewiewcomponent/Section15";
*/}
       


       

            
            
          </Routes>

          <Footer /> {/* Always visible */}
        </div>
      )}
    </>
  );
}

export default App;
