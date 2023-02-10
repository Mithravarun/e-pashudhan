// import React from 'react';
// import Card from '../components/Card';
// import { LivestockData } from "../data/LivestockData";
// import "../styles/LivestockStyles.css";

// const Livestock = () => {
//   return (
//     <>
//     <div className="container mt-5">
//     <h1>Types of Livestocks</h1>
//     <section>
//     {LivestockData.map((item, index) =>{
//         return <Card key={index} item={item} />
//     })}
//     </section>
//     </div>
//     </>
//   )
// }

// export default Livestock

import React from "react";
import Murrah from "../assets/images/murrah.jpg";
import Nili_Ravi from "../assets/images/nili-ravi.jpg";
import Mehsana from "../assets/images/mehsana.jpg";
import Nagpuri from "../assets/images/nagpuri.jpg";
import Jaffarabadi from "../assets/images/jbuffalo.jpg";
import Bhadawari from "../assets/images/bhadarwari.jpg";
import Surti from "../assets/images/surti.jpg";
import Toda from '../assets/images/toda.jpg'
import "../styles/LivestockStyles.css";
import ReadMore from "../components/ReadMore";

function Livestock() {
  return (
    <>
      <section className="card-section">
        <div className="container">
          <center>
            <h1>Livestock</h1>
          </center>
          <h1 style={{ fontWeight: `bold`, fontSize: `xx-large` }}>
            Types of Buffaloes
          </h1>
          <div className="cardBox">
            <div className="card">
              <img src={Murrah} alt="" />
              <div className="content">
                <h3>Murrah Buffalo</h3>
                <ReadMore limit={155}>
                  Murrah buffalo is the highest milk yielding Buffalo. It
                  produces on an average 15 liters of milk a day. This is more
                  than most of the cow breeds in India. Murrah is called by many
                  names Kali, Kundi and Delhi. The breed is primarily from
                  Haryana, India. The breed is jet black in color that has short
                  horn and tightly coiled. Advantage of their well-developed
                  udder, Murrah yields around 1000 liters to 2000 liters of milk
                  per lactation. The fat percentage is around 6.9 % to 8.3 % in
                  Murrah’s milk.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Nili_Ravi} alt="" />
              <div className="content">
                <h3>Nili Ravi Buffalo</h3>
                <ReadMore limit={120}>
                  Nili Ravi buffalo breed is the second most milk yield buffalo.
                  On average it produces around 10 liters of milk per day. The
                  Nili ravi is from Punjab province. The breed is also called as
                  Panch Kalyani. The unique walled years and white markings on
                  their forehead, face, legs and tail can be seen in Nili Ravi.
                  Average production of 1500 liters to 1900 liters of milk per
                  lactation. The period lasts for 300 days. The average calving
                  interval is 15 months.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Mehsana} alt="" />
              <div className="content">
                <h3>Mehsana Buffalo</h3>
                <ReadMore limit={142}>
                  Mehsana is a cross between two of the best milking buffaloes
                  Murrah and Surti breeds. Mehsana buffalo is from the Mehsana
                  district of Gujarat. Mehsana is called by several alternate
                  names Mahesani and Mehsani. The unique sickle-shaped horns
                  that are curved can be seen on Mehsana. Also, the body color
                  is blackish brown or brown. Average milk production of Mehsana
                  buffalo is 1200 to 1500 liters per lactation. The fat
                  percentage is 5 to 9.5 percentage.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Nagpuri} alt="" />
              <div className="content">
                <h3>Nagpuri Buffalo</h3>
                <ReadMore limit={138}>
                  Nagpuri Buffalo is from the Vidarbha region of Maharashtra. A
                  dual-purpose breed that is suitable for milk production and
                  drought regions. The breed is called by several names
                  Puranthadi, Gaolavi, Chanda, Shahi, Gaolaogan, Gangauri,
                  Berari and Arvi. The unique horn of Nagpuri buffalo can easily
                  protect them from wild animals. The horns are flat, curved and
                  so long that reaches till shoulders. The average milk
                  production is 1030 liters per lactation period with a fat
                  percentage of 7 percentage.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Jaffarabadi} alt="" />
              <div className="content">
                <h3>Jaffarabadi Buffalo</h3>
                <ReadMore limit={179}>
                  Jaffarabadi buffalo is the heaviest buffalo breed, that weighs
                  around 800 to 1000 kg. The breed is from Gujarat are of
                  Amreli, Bhavnagar, Jamnagar, Porbandar and Rajkot districts.
                  The Buffalo looks pretty unique, with a curved downward horns
                  that is compressing the head. The body is black in color. On
                  average 1800 liters of milk is produced by Jaffarabadi buffalo
                  during a lactation period of 305 days. The average
                  intercalving period is 440 days.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Bhadawari} alt="" />
              <div className="content">
                <h3>Bhadawari Buffalo</h3>
                <ReadMore limit={124}>
                  The Bhadawari breed is from Madhya Pradesh and Uttar Pradesh,
                  a dual-purpose breed suitable for milk and drought situations.
                  The buffalo breed is also known as “Etawah”. The body color of
                  Bhadawari is blackish copper to light copper. On the lower
                  side of neck, there are two white lines “Chevron” called as
                  Kanthy(locally). The average milk yield is 1200 liters per
                  lactation. The fat percentage in the milk is around 7.88
                  percentage, highest among buffaloes.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={ Toda } alt="" />
              <div className="content">
                <h3>Toda Buffalo</h3>
                <ReadMore limit={131}>
                  Toda buffaloes are ash grey coloured.Color of the calf is
                  generally fawn at birth which varies from grey, light grey and
                  dark grey. In growing calves, at about 2-3 months, the fawn
                  color changes to ash grey.The husbandry practices of Toda are
                  of primitive in nature; the calf pen and houses are made of
                  locally available wooden stakes, mud and stones. The buffaloes
                  are housed in a circular enclosure without roof.
                </ReadMore>
              </div>
            </div>
            <div className="card">
              <img src={Surti} alt="" />
              <div className="content">
                <h3>Surti Buffalo</h3>
                <ReadMore limit={167}>
                  Surti is from Baroda and Kaira of Gujarat. Also famous for
                  their milk production abilities. Surti buffalo breed is called
                  by several names Deccani, Gujarati, Charotari, Nadiadi, and
                  talabda. The breed comes in black or brown color body with two
                  white collars – one around the jaw and other at the brisket.
                  Surti produces on an average 5 to 7 liters of milk. On average
                  900 to 1300 liters of milk are produced during a lactation
                  period of 290 days.
                </ReadMore>
              </div>
            </div>
          </div>
        </div>
      </section>
          </>
  );
}

export default Livestock;