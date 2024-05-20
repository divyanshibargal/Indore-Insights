import React from "react";
import Navbar1 from "./Navbar/Navbar1";
import rajwada from "./images/rajwada.png";
import gandhihall from "./images/gandhihall.jpg";
import Laalbagh from "./images/Laalbagh.jpg";
import Khajrana from "./images/Khajrana.png";
import janapav from './images/janapav.jpg'
import annapurna from './images/annapurna.jpg'

import "./Popular.css";

export default function Popular() {
  return (
    <>
      <Navbar1 />
      <div className="container">
        <h1
          className="text-center my-6"
          style={{ marginTop: "10rem", marginBottom: "3rem" }}
        >
          Discover the Enchanting Charms of Indore's Popular Destinations
        </h1>
        <p
          className="text-center my-5"
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
        >
          {" "}
          Welcome to our guide to the captivating city of Indore, where every
          corner boasts a unique blend of heritage, culture, and modernity.
          Indore's popularity as a tourist destination is no accident; it's a
          result of the city's rich history, delectable cuisine, and a plethora
          of attractions waiting to be explored
        </p>
        <div className="firstplace">
          <div className="firsttext">
            {" "}
            <h2 className="heading">1. Rajwada Palace</h2>
            <p>
              Rajwada is a magnificent and historical palace that is located in
              the city of Indore and was constructed by the Holkars more than
              200 years ago. It is a seven-storied structure located near the
              Chhatris and serves as an excellent example of royal grandeur and
              architectural skills.
            </p>
            <i className="fa-solid fa-location-dot"></i> Rajwada, Indore, Madhya
            Pradesh 452002
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
          <div className="fimage">
            <img src={rajwada} className="img" alt="..."  loading="lazy"/>
          </div>
        </div>
        <div className="secondplace">
          <div className="fimage">
            <img src={gandhihall} className="img" alt="..."  loading="lazy"/>
          </div>
          <div className="secondtext">
            {" "}
            <h2 className="heading">2. Gandhi Hall </h2>
            <p>
              A testament of awe-striking Indo-Gothic architecture, the Gandhi
              Hall was named so after the passing of our great father of the
              nation - Mahatma Gandhi. Made of white marble and Seoni and red
              stones, the grandiose of this monument is simply majestic.
            </p>
            <i className="fa-solid fa-location-dot"></i> 51, Mahatma Gandhi Rd,
            Shastri Market, New Siyaganj, Indore, Madhya Pradesh 452007
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
        </div>
        <div className="firstplace">
          <div className="firsttext">
            {" "}
            <h2 className="heading">3. LaalBagh Palace</h2>
            <p>
              Resided by the rulers of the Holkar dynasty, the Lal Bagh Palace
              is class and grandeur personified. The palace is spread on a
              sprawling area of 28 acres and reflects the taste of the rulers of
              the Holkar dynasty.
            </p>
            <i className="fa-solid fa-location-dot"></i> PR2W+2RH, Nai Duniya,
            Revenue Colony, Indira nagar, Indore, Madhya Pradesh 452007
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
          <div className="fimage">
            <img src={Laalbagh} className="img" alt="..." loading="lazy"/>
          </div>
        </div>

        <div className="secondplace">
          <div className="fimage">
            <img
              src="https://static.wixstatic.com/media/c46d97_f3837296dfb74c66bbfe637c3da0dd8c~mv2.jpg/v1/fill/w_640,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c46d97_f3837296dfb74c66bbfe637c3da0dd8c~mv2.jpg"
              className="img"
              alt="..." loading="lazy"
            />
          </div>
          <div className="secondtext">
            {" "}
            <h2 className="heading">4.Sarafa Bazar </h2>
            <p>
              The lip-smacking flavours of the food stalls in Sarafa Bazaar are
              a testimony to Indore's legendary love affair with food.
              Entertaining over 3000 visitors every day, the Sarafa Bazaar
              houses stalls that sell vividly coloured artificial jewellery,
              brass ornaments and mouth-watering dishes of the diverse cuisine
              of Indore. There are more than 50 dishes available here at
              extremely low rates.
            </p>
            <i className="fa-solid fa-location-dot"></i> Sarafa Bazar ,Indore,Madhya Pradesh 452001
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
        </div>
        <div className="firstplace">
          <div className="firsttext">
            {" "}
            <h2 className="heading">5. Khajrana Temple</h2>
            <p>
              The Khajrana Ganesh temple is one of the most powerful shrines of
              the Lord Ganesha. It was built by Rani Ahilyabai Holkar to
              safeguard the idol of Lord Ganesha from Aurangzeb. The temple has
              since grown from being housed in a small hut to a big temple with
              large inner and outer sanctums.
            </p>
            <i className="fa-solid fa-location-dot"></i> Ganeshpuri Main Rd, Ganeshpuri, Khajrana, Indore, Madhya Pradesh 452016
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
          <div className="fimage">
            <img src={Khajrana} className="img" alt="..." loading="lazy"/>
          </div>
        </div>

        <div className="secondplace">
          <div className="fimage">
            <img
              src="https://www.trawell.in/admin/images/upload/164055318Indore_Kaanch_Mandir_Main.jpg"
              className="img"
              alt="..."
            />
          </div>
          <div className="secondtext">
            {" "}
            <h2 className="heading">6.Kanch Mandir </h2>
            <p>
              The Kanch Mandir, also known as the "Glass Temple," is a unique
              and exquisitely crafted Jain temple located in the city of Indore,
              Madhya Pradesh, India. This temple is renowned for its stunning
              glasswork and intricate mirror mosaics that adorn the temple's
              interior and exterior.{" "}
            </p>
            <i className="fa-solid fa-location-dot"></i> PR8X+G57, Hukumchand
            Marg, Itwaria Bazaar, Indore, Madhya Pradesh 452002
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
        </div>

        <div className="firstplace">
          <div className="firsttext">
            {" "}
            <h2 className="heading">7. Phooti Kothi</h2>
            <p>
              Phooti Kothi, meaning 'broken palace' in Hindi, is a
              half-completed, abandoned royal residence located in Sudama Nagar
              in south-west Indore. The building is the only example of
              incomplete Holkar architecture, with construction starting in
              1886, and being abandoned in 1902. At present, the building lies
              barren, and is said to be 'cursed' and 'haunted' according to
              local legend, which believes that the site was doomed from the
              start{" "}
            </p>
            <i className="fa-solid fa-location-dot"></i>Phooti Kothi Indore, Madhya Pradesh 452009
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
          <div className="fimage">
            <img
              src="https://map.sahapedia.org/admin/assets/images/202202918271734IMG_8434.jpg "
              className="img"
              alt="..."
            />
          </div>
        </div>

        <div className="secondplace">
          <div className="fimage">
            <img
              src="https://as1.ftcdn.net/v2/jpg/05/36/14/96/1000_F_536149657_yeExrw8oL9m4iNN1PEQN0VSZQePb5PCR.jpg"
              className="img"
              alt="..."
            />
          </div>
          <div className="secondtext">
            {" "}
            <h2 className="heading">8.Krishnapura Chhatri </h2>
            <p>
              The Krishnapura Chhatri are distinct from Chhatri Bagh, which form
              two groups of chhatri dedicated to further Holkar rulers in
              Indore. The first honours Malhar Rao Holkar, Male Rao Holkar,
              Khande Rao Holkar, Tukoji Rao I, Malhar Rao Holkar I, Tarabai
              Holkar, Snehalata Raje and Indirabai Holkar.{" "}
            </p>
            <i className="fa-solid fa-location-dot"></i> PV95+G66, Mahatma
            Gandhi Rd, Rajwada, Maharaja Tukoji Rao Holker Cloth Market, Indore,
            Madhya Pradesh 452007
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
        </div>

        <div className="firstplace">
          <div className="firsttext">
            {" "}
            <h2 className="heading">9.Chhappan Dukaan</h2>
            <p>
              Chhappan Dukaan is one of Indore's choicest street food hubs that
              serve specials, chaat, idli and dosa with equal gusto. Chhappan
              Dukaan literally means fifty-six shops. At the time when it was
              established, 56 separate shops were started here, all selling food
              items. The evenings light the place up like nothing else with
              people consuming the delectable spread with enthusiasm
            </p>
            <i className="fa-solid fa-location-dot"></i> New Palasia, Indore,
            Madhya Pradesh 452001
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
          <div className="fimage">
            <img
              src="https://travelophia.com/wp-content/uploads/2023/02/Chappan-Dukan.jpg"
              className="img"
              alt="..."
            />
          </div>
        </div>

        <div className="secondplace">
          <div className="fimage">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/85/3f/65/jogging-trek.jpg?w=2000&h=-1&s=1"
              className="img"
              alt="..."
            />
          </div>
          <div className="secondtext">
            {" "}
            <h2 className="heading">10.Pipliyapala Regional Park Indore</h2>
            <p>
              Spreading over an area of a whopping 122 acres and housing a
              ginormous 80-acre lake, the Pipliyapala Regional Park is an
              absolute treat for adults and children alike. Engage in some
              fun-filled activities like pedal-boating and motor-boating and
              witness the magical allure of the Mist and Musical Fountain,
              French Gardens, Labyrinths, Artist Village, etc.
            </p>
            <i className="fa-solid fa-location-dot"></i> MVH4+J64, Regional Park Rd, Pipliya Pala, Pawan Putra Nagar, Indore, Madhya Pradesh 452020
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
        </div>
        
        <div className="firstplace">
          <div className="firsttext">
            {" "}
            <h2 className="heading">11. Central Museum Indore</h2>
            <p>
            The Central Museum Indore, also known as the Indore Museum, is a prominent museum located in Indore, Madhya Pradesh, India. It is one of the oldest museums in the state of Madhya Pradesh and is recognized for its rich collection of artifacts spanning various periods of history.
            </p>
            <i className="fa-solid fa-location-dot"></i> PV4H+4PM, Near GPO Square, Residency, Navlakha, Indore, Madhya Pradesh 452001
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
          <div className="fimage">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/16/15/d8/indore-museum.jpg?w=800&h=-1&s=1" className="img" alt="..." />
          </div>
        </div>
        <div className="secondplace">
          <div className="fimage">
            <img src="https://files.yappe.in/place/full/indore-zoo-main-gate-2428883.webp" className="img" alt="..." />
          </div>
          <div className="secondtext">
            {" "}
            <h2 className="heading">12. Indore Zoo </h2>
            <p>
            Visitors to Indore Zoo can explore various exhibits showcasing animals from different parts of the world, including lions, tigers, leopards, elephants, bears, deer, monkeys, reptiles, birds, and more. The zoo also features a butterfly park, a reptile house, and an aquarium, providing visitors with opportunities to learn about a wide range of species.
            </p>
            <i className="fa-solid fa-location-dot"></i> Doordarshan Kendra, Navlakha, Indore, Madhya Pradesh 452001
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
        </div>
        <div className="firstplace">
          <div className="firsttext">
            {" "}
            <h2 className="heading">13.Annapurna Temple</h2>
            <p>
            The Annapurna Temple, besides being a place for pilgrimages is also a tourist attraction. Dedicated to Goddess Annapurna, the deity of food the temple also houses the shrines of Sivan, Hanuman and Kalabhairava.
            </p>
            <i className="fa-solid fa-location-dot"></i> Annapurna Rd, Annapurna Mandir, Kranti Kriplani Nagar, Indore, Madhya Pradesh 452009
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
          <div className="fimage">
            <img src={annapurna}className="img" alt="..." />
          </div>
        </div>

        <div className="secondplace">
          <div className="fimage">
            <img
              src="https://media.assettype.com/knocksense%2F2023-12%2Ff952b8c2-85f2-4592-8b9b-d129f1f53114%2FIMG_6703.jpeg"
              className="img"
              alt="..."
            />
          </div>
          <div className="secondtext">
            {" "}
            <h2 className="heading">14.Holkar Cricket Stadium </h2>
            <p>
            The stadium is named after the Holkar dynasty, which has historical significance in the region. It has a seating capacity of around 30,000 spectators, making it one of the larger cricket stadiums in India.It is one of the major cricket venues in the country and has hosted numerous domestic and international cricket matches.
            </p>
            <i className="fa-solid fa-location-dot"></i> IDA Building, Race Course Rd, Near Janjeerwala Square, New Palasia, Indore, Madhya Pradesh 452001
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
        </div>
        <div className="firstplace">
          <div className="firsttext">
            {" "}
            <h2 className="heading">15.Ralamandal Wildlife Sanctuary</h2>
            <p>
            Ralamandal Wildlife Sanctuary is located near Indore is one of the lesser-known wildlife sanctuaries in the region but holds importance for its ecological diversity and conservation efforts.
            </p>
            <i className="fa-solid fa-location-dot"></i> Mirjapur, Indore, Madhya Pradesh 452020
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
          <div className="fimage">
            <img src="https://hblimg.mmtcdn.com/content/hubble/img/indoredestimages/mmt/activities/m_Ralamandal_Wildlife_Sanctuary_1_l_479_640.jpg" className="img" alt="..." />
          </div>
        </div>

        <div className="secondplace">
          <div className="fimage">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/4b/0e/96/lotus-valley.jpg?w=1400&h=-1&s=1"
              className="img"
              alt="..."
            />
          </div>
          <div className="secondtext">
            
            <h2 className="heading">16.Gulawat Lotus Valley </h2>
            <p>
            The serene surroundings of Gulawat Lotus Lake make it a popular spot for picnics and nature lovers. Visitors can enjoy the peaceful ambiance, take leisurely walks around the lake, and admire the beautiful lotus flowers in bloom. The lake is also home to various species of birds, making it a haven for birdwatchers.
            </p>
            <i className="fa-solid fa-location-dot"></i> Gurda Khedi, Madhya Pradesh 453111
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
        </div>

        <div className="firstplace">
          <div className="firsttext">
            <h2 className="heading">17.Sirpur Lake</h2>
            <p>
              Phooti Kothi, meaning 'broken palace' in Hindi, is a
              half-completed, abandoned royal residence located in Sudama Nagar
              in south-west Indore. The building is the only example of
              incomplete Holkar architecture, with construction starting in
              1886, and being abandoned in 1902. At present, the building lies
              barren, and is said to be 'cursed' and 'haunted' according to
              local legend, which believes that the site was doomed from the
              start{" "}
            </p>
            <i className="fa-solid fa-location-dot"></i>PR36+3RX, Sirpur, Indore, Madhya Pradesh 452013
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
          <div className="fimage">
            <img
              src="https://www.hlimg.com/images/things2do/738X538/ttd_1523263290m2.jpg?w=400&dpr=2.6 "
              className="img"
              alt="..."
            />
          </div>
        </div>

        <div className="secondplace">
          <div className="fimage">
            <img
              src="https://i.pinimg.com/originals/df/d2/44/dfd2445902e66db3bcdaeddc3473e77d.jpg"
              className="img"
              alt="..."
            />
          </div>
          <div className="secondtext">
            <h2 className="heading">18.Pitra Parvat </h2>
            <p>
            The sculptures of Lord Hanuman are usually seen in a standing position. But at Pitra Parvat, you will see Lord Hanuman sitting in a meditative state. Worshipping Lord Hanuman in a sitting position is considered very rare and this is the reason most people visit this place. Moreover, there are two deities of Lord Hanuman established on the mountain Pitra Parvat. One is established for tourism and attrition & the other one is where devotees worship Lord Hanuman 
            </p>
            <i className="fa-solid fa-location-dot"></i> Gandhi nagar, Indore, Budhaniya, Madhya Pradesh 453112
           
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
        </div>

        <div className="firstplace">
          <div className="firsttext">
            {" "}
            <h2 className="heading">19. Gomatgiri Temple</h2>
            <p>
            Gomatgiri, a small hillock near Indore, is one of the most popular religious attractions for the followers of Jainism. Located only a 10 minutes drive away from the airport in the city, the hillock is synonymously known for its nearly 21 feet statue of Gomateshwar. The statue is said to be an exact replica of the Bahubali statue of Shrawanbegola.
            </p>
            <i className="fa-solid fa-location-dot"></i> PQWF+78R, Major District Rd, Nainod Village, Indore, Madhya Pradesh 257112
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
          <div className="fimage">
            <img
              src="https://indoretalk.com/wp-content/uploads/2018/02/Gomatgiri-Temple-indore-talk-02.jpg"
              className="img"
              alt="..."
            />
          </div>
        </div>

        <div className="secondplace">
          <div className="fimage">
            <img
              src={janapav}
              className="img"
              alt="..."
            />
          </div>
          <div className="secondtext">
            {" "}
            <h2 className="heading">20.Janapav</h2>
            <p>
            Nestled among similar hills of the Malwa region, Janapav or Janapav Kuti is the ideal getaway for lovers of nature and trekkers alike. If you’re looking to traverse through twisty bends in Central Indian forests while peacefully gazing over distant hills and the crimson sunset, this hill station should be your destination. Located on the Mumbai-Indore highway and in the Mhow Tehsil of Indore district
            </p>
            <i className="fa-solid fa-location-dot"></i> Badkua, Madhya Pradesh 453441
            <br />
            <a
              className="btn btn-primary my-4"
              href="/map_popular" 
              style={{ fontSize: "1.1rem" }}
              role="button"
            >
              <strong>
                View on map <i className="fa-solid fa-location-arrow"></i>
              </strong>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
