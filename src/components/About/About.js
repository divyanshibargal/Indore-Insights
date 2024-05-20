import React from 'react'
import rajwada from '../images/rajwada.png'
import Navbar1 from '../Navbar/Navbar1'
import './About.css'
import stayicon from '../images/stayicon.png'
import sunicon from '../images/sunicon.png'
import bicon from '../images/bicon.png'
import ficon from '../images/ficon.png'
import resicon from '../images/resicon.png'
import shopicon from '../images/shopicon.png'
import eicon from '../images/eicon.png'
import video from '../images/INDORE_INSIGHTS_VIDEO.mp4'
import poster from  "../images/Indore_poster.jpg"
import picon from "../images/picon.png"
import ticon from "../images/ticon.png"
import oicon from "../images/oicon.png"
import hicon from '../images/hosicon.png'
import gicon from "../images/gicon.png"
// import Footer from "../Footer"
export default function About() {

//     const[data , setData] = useState([]);
//     const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': 'd3691571c8msh6442b0b5e277e38p199764jsn7fb44f099b0a',
//                 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//             }
//         };

// useEffect(()=>{
//     const fetchData = async() =>{
//    await  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Indore', options)
//         .then(response => response.json())
//         .then(response => {
//             setData(response);
//             console.log(response)})
//         }
//         fetchData();
// }, [])

    return (
        <>
            <Navbar1 />
            <div className='container'>
                <div className='secondplace'>
                    <div className='fimage'>
                        <img src={rajwada} className='img' alt='...' />
                    </div>
                    <div className='secondtext te'> <h2 className='heading '>Indore </h2>
                        <h3> <i className='fas fa-map-marker-alt'></i> Madhya Pradesh , India </h3>
                        {/* <span>{data.temp}&deg;C <i className="fa-duotone fa-cloud-sun" 
                        style={{"--fa-primary-color":"#e0e0e0" ,"--fa-primary-opacity": "0.8" , "--fa-secondary-color": "#f9d90b" ,"--fa-secondary-opacity": "01"}}></i></span></h3> */}
                        <p>Indore, located in the heart of India, is the largest and most populous city in the state of Madhya Pradesh. Known for its rich cultural heritage, vibrant markets, and delectable cuisine, Indore has earned the moniker of "Mini Mumbai" due to its bustling atmosphere and economic significance. </p>

            <a
              className="btn btn-primary my-4"
              href="https://maps.app.goo.gl/y6MxkkqJt1PuXt6z9"
              rel="noreferrer"
              target="_blank"
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
            <h2 className='heading my-5' style={{ marginLeft: "5rem", marginTop: "8rem" }}>Plan your Trip to Indore</h2>
            <div className='container1'>
               <a href='/hotels' style={{textDecoration : "none" , color:"black"}}>
                <div className='cards fcard'>
                    <img src={stayicon} alt="..." />
                    <h5 className='text-center'>Where to Stay</h5>
                </div>
                </a> 
            <a  href='/Time' style={{textDecoration : "none" , color:"black"}}>
                <div className='cards scard'>
                    <img src={sunicon} alt="..." />
                    <h5 className='text-center'>Best Time To Visit</h5>
                </div>
              </a>
                <a  href='/thingstodo' style={{textDecoration : "none" , color:"black"}}>
                <div className='cards tcard'>
                    <img src={bicon} alt="..." />
                    <h5 className='text-center'>Things to do</h5>
                </div>
             </a>
             <a  href='/popular' style={{textDecoration : "none" , color:"black"}}>
                <div className='cards ftcard'>
                    <img src={ticon} alt="..." />
                    <h5 className='text-center'>What to see</h5>
                </div>
                </a>
            </div>
            <div className='container2 my-4'>
                <a  href='/restaurants' style={{textDecoration : "none" , color:"black"}}>
            <div className='cards fcard' style={{backgroundColor : "#FED480"}}>
                    <img src={resicon}  style={{width:"40%" , marginLeft:"3.5rem"}} alt="..." />
                    <h5 className='text-center'>Where to eat</h5>
                </div>
              </a>
              <a  href='/famous' style={{textDecoration : "none" , color:"black"}}>
                <div className='cards scard' style={{backgroundColor : "#E2F397"}}>
                    <img src={eicon} alt="..." style={{width : "40%" , marginLeft : "3.5rem"}} />
                    <h5 className='text-center'>What to eat</h5>
                </div>
            </a>
            <a  href='/shopping' style={{textDecoration : "none" , color:"black"}}>
                <div className='cards tcard' style={{backgroundColor : "#FFEEF4"}}>
                    <img src={shopicon} alt="..." />
                    <h5 className='text-center'>Where to Shop</h5>
                </div>
             </a>
             <a  href='/temples' style={{textDecoration : "none" , color:"black"}}>
                <div className='cards ftcard' style={{backgroundColor : "#9EC8C1"}}>
                    <img src={picon} alt="..." style={{width:"37%" , marginLeft:"3.3rem"}} />
                    <h5 className='text-center'>Religious Places</h5>
                </div>
                </a>
            </div>

            <div className='container2 my-4'>
               <a href="/outskirts" style={{textDecoration : "none" , color:"black"}}>
                <div className='cards fcard' style={{backgroundColor : "#bfe9db"}}>
                    <img src={oicon} alt="..."  style={{width : "40%" , marginLeft : "3.5rem"}}/>
                    <h5 className='text-center'>Outskirts</h5>
                </div>
                </a> 
            <a  href='/hospital' style={{textDecoration : "none" , color:"black"}}>
                <div className='cards scard' style={{backgroundColor:"#ffcab0"}}>
                    <img src={hicon} alt="..." style={{width : "46%" , marginLeft : "3.5rem"}}/>
                    <h5 className='text-center'>Emergency</h5>
                </div>
              </a>
                <a  href="/education" style={{textDecoration : "none" , color:"black"}}>
                <div className='cards tcard' style={{backgroundColor :"#c4c1e0"}}>
                    <img src={gicon} alt="..." />
                    <h5 className='text-center'>Academia</h5>
                </div>
             </a>
             <a  href='/reach' style={{textDecoration : "none" , color:"black"}}>
                <div className='cards ftcard' style={{backgroundColor:"#f8e7e7"}}>
                    <img src={ficon} alt="..." />
                    <h5 className='text-center'>How to Reach</h5>
                </div>
                </a>
            </div>

            <div className='box '>
                <h2 className='heading' > <i>"'The food city' famous for its Poha and Jalebi"</i></h2>
                <p className='my-4'>Indore has been one of the fore-runners in the development of the country in the era of modernization. One of the educational hubs in the country, Indore has both an IIT and an IIM. Indore is also the cleanest city of India. Indore has over the years established itself as the hub of trading and industrial practices in the state.  The city of Indore gets its name from Indreshwar Mahadev temple. It is believed that Lord Indra meditated on this land and led Swami Indrapuri to establish this temple. Try out some local delicacies like Indori Poha at Sarafa Bazaar while you are in Indore.</p>
                <p>
                    Indore is celebrated not only for its historical significance but also for its culinary delights, particularly its popular street food. Indore's street food has not only captured the taste buds of locals but has also gained national recognition, making the city a must-visit destination for food lovers seeking an authentic and delectable culinary experience.</p>
            </div>

          <div className='container my-4'>
            <h2 className='heading my-5 text-center'>Indore Unveiled: A Visual Odyssey</h2>
           {/* <Carousel/> */}
            <video src={video} width={"100%"}  controls poster={poster} className='my-4' />
          </div>

            <h2 className='heading my-5' style={{ marginLeft: "5rem", marginBottom: "3rem" }}> Places to Visit near Indore</h2>
            <div className='container' style={{ marginBottom: "2.5rem" }}>
                <div className='row '>
                    <div className="card col-md-4" >
                        <img src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/12/06/90e8ff56d4b306e80b0f697d9a4473c51670316864037584_original.jpg?impolicy=abp_cdn&imwidth=640" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mahakaleshwar Temple, Ujjain</h5>
                            <p className="card-text">Cradled in the village of Jaisinghpura of Ujjain, the Mahakaleshwar Jyotirlinga is a revered shrine dedicated to the Hindu Lord Shiva and is the most remarkable of all tourist places within 100 km from Indore. </p>
                        </div>
                    </div>
                    <div className="card col-md-4" >
                        <img src="https://media2.thrillophilia.com/images/photos/000/129/421/original/1608104764_shutterstock_1441505609.jpg?w=753&h=450&dpr=1.5" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Maheshwar Ghats</h5>
                            <p className="card-text">This fascinating town by the river Narmada is one of those tourist places near Indore which is popular for both its architectural splendor and its spiritual vibes. The capital city of legendary queen Ahilyabai Holkar, Maheshwar is home to her fort and palace and more temples than you could count. </p>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src="https://static.toiimg.com/photo/70433543.cms"className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Omkareshwar</h5>
                            <p className="card-text">Perched serenely on the banks of the holy Narmada River (also called Ma Rewa by the locals), is the divine Omkareshwar temple. Thronged by pilgrims from all over the country all the year-round, Omkareshwar is one of the 12 revered jyotirlingas in the country.</p>
                        </div>
                    </div>
                </div>
                <a href="/outskirts" className="button1" role="button">View All</a>
            </div>


            <div className='container' style={{marginTop :"5.5rem" }}>
                <h2 className='heading'>More on Indore</h2>
                <div className="accordion my-4" id="accordionExample" >
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingOne" >
                            <button className='accordion-button' type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Indore - A Mini version of Mumbai</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                One of the most populated cities of Madhya Pradesh, Indore is a major commercial hub, growing exactly on the same lines, as does India's major commercial capital, Mumbai. However, given the size of both the cities, Indore is aptly nicknamed Mini Mumbai. This city was once ruled by the Maratha scion of Holkars, among whom Devi Ahilya Bai Holkar has a special place in the history of India. Indore is also a major education hub, owing to the city being the seat of both IIT [Indian Institute of Technology] and IIM [Indian Institute of Management]. Very few people know that Indore is also the birth town of star cricketer Rahul Dravid, as well as Bollywood star Salman Khan, who had lived up to five years of his childhood here.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingTwo" >
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                                <strong>History of Indore</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body"  >
                                Indore witnessed the conflict between the Mughals, Marathas and the British who wanted to gain domination of Central India. Located in the Malwa Region, the city of Indore was founded by Rao Nandlal Chaudhary. On his visit to the Indreshwar temple, he found the area to be sheltered and secured by natural boundaries on all sides. He established the city of Indrapur and built a fortress there. The name Indore is a change of Indrapur. When the Marathas became powerless after they lost the third battle of Panipat to Ahmad Shah Abdali, an Afghan invader, they had to sue for peace in order to resist the British. After this, the Holkars established their rule on Indore. The Holkar Dynasty was founded by one of the greatest warriors of his time, Maharaja Malhar Rao Holkar I. Even during the British Raj, Indore remained as the part of the Holkar Dynasty. During the Independence of India, it joined a few other Princely States and became a part of Madhya Bharat. Later, it became a part of Madhya Pradesh on November 1, 1956.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingThree" >
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                                <strong>Maratha Architecture </strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                There is very little information with respect to the architecture of the earlier period covering the rules of Shivaji, Sambhaji, Rajaram and Shahu. The prior Maratha rulers had neither the time nor the assets to indulge in such activities because of their extended wars with the Mughals. However, one can get some idea about the features of the Maratha architecture from the later built forts and buildings. The materials that were mostly used for construction were bricks, mortars and stone. The arches were made in the Deccan style, even though their use was kept to a minimum. Some of the decorative features that were commonly used were arches, stone brackets, narrow balconies that are jutting out of these brackets and shallow ceilings in the shape of domes. The Maratha design did not have the excellence and beauty of the structures of the Mughals and the Rajputs. Be that as it may, the Marathas exceeded expectations in fortification engineering. The woodwork they used to enliven their royal residences, and other common structures were intricate and minute.
                            </div>
                        </div>
                        <div className="accordion-item" >
                            <h2 className="accordion-header" id="headingFour" >
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" >
                                    <strong>Suggested Itinerary for Indore  </strong>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>Day 1 :</strong> Reach Indore, preferably by noon, and take some rest. In the evening, you can take a stroll on the city side, particularly Sitlamata Bazar, which is famous for its retail clothing. Or if you wish to go trendy, visit the Treasure Island Mall on MG Road, Indore. Those who are ultimate foodies can prefer to gorge at Chappan Dukan, which has street food of all kinds in 56 shops!
                                    <br/>
                                    <strong>Day 2 :</strong>  The next day should be earmarked for a visit to the glorious Lal Bagh Palace, which houses some exquisite artefacts right from Mughal era to the time when Holkars ruled Indore. Then, you can go for the majestic Rajwada, which has glimpses from the time of famous warrior queen, Devi Ahilya Bai Holkar. This is 3.1 km. away from the Lal Bagh Palace.
                                    <br/>
                                    <strong>Day 3 :</strong>  The final day can start with blessings from Annapurna Mandir or Bada Ganpati Mandir, which has one of the biggest idols in the world of Lord Ganesha. A 39-minute drive will further take you to another site of interest in Indore, which is the Ralamandal Wildlife Sanctuary, holding some of the rarest species of flora and fauna. By the time you return from Indore, you shall leave satisfied to the core.
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* <Footer/> */}

        </>
    )
}
