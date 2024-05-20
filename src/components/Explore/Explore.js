import React from 'react'
import Navbar1 from '../Navbar/Navbar1'
import rajwada from '../images/rajwada.png';
import gandhihall from '../images/gandhihall.jpg'
import iskontemple from '../images/iskontemple.jpg';
import patalpani from '../images/patalpani.jpg'
import mohadi from '../images/mohadi.jpeg'
import tincha from '../images/tincha.jpg'
import './Explore.css';
import Khajrana from '../images/Khajrana.png';
import Laalbagh from '../images/Laalbagh.jpg';
import annapurna from '../images/annapurna.jpg';
import essentia from '../images/essentia.jpg'
import janapav from '../images/janapav.jpg'
// import Footer from './Footer'




export default function Explore() {
    return (
        <>
            <Navbar1 />
            <h1 className='text-center my-6' style={{ marginTop: '120px', marginBottom: '45px' }}> Popular Destinations</h1>
            <div className='container'>
                <div className='row '>
                    <div className="card col-md-4" >
                        <img src={rajwada} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Rajwada</h5>
                            <p className="card-text">Rajwada is a magnificent and historical palace that is located in the city of Indore and was constructed by the Holkars more than 200 years ago. It is a seven-storied structure located near the Chhatris and serves as an excellent example of royal grandeur and architectural skills.</p>
                            
                        </div>
                    </div>
                    <div className="card col-md-4" >
                        <img src={gandhihall} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Gandhi Hall</h5>
                            <p className="card-text">A testament of awe-striking Indo-Gothic architecture, the Gandhi Hall was named so after the passing of our great father of the nation - Mahatma Gandhi. Made of white marble and Seoni and red stones, the grandiose of this monument is simply majestic.</p>
                           
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src={Laalbagh} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Laal Bagh Palace</h5>
                            <p className="card-text">Resided by the rulers of the Holkar dynasty, the Lal Bagh Palace is class and grandeur personified. The palace is spread on a sprawling area of 28 acres and reflects the taste of the rulers of the Holkar dynasty.</p>
                           
                        </div>
                    </div>
                    <a href="/popular" className="button " role="button">View more</a>
                </div>
            </div>
            <h1 className='text-center my-6' style={{ marginTop: '4rem', marginBottom: '45px' }}> Religious Places in Indore</h1>
            <div className='container'>
                <div className='row '>
                    <div className="card col-md-4" >
                        <img src={Khajrana} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Khajrana Temple</h5>
                            <p className="card-text">The Khajrana Ganesh temple is one of the most powerful shrines of the Lord Ganesha. It was built by Rani Ahilyabai Holkar to safeguard the idol of Lord Ganesha from Aurangzeb. The temple has since grown from being housed in a small hut to a big temple with large inner and outer sanctums.</p>
                            
                        </div>
                    </div>
                    <div className="card col-md-4" >
                        <img src={annapurna} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Annapurna Temple</h5>
                            <p className="card-text">The Annapurna Temple, besides being a place for pilgrimages is also a tourist attraction. Dedicated to Goddess Annapurna, the deity of food the temple also houses the shrines of Sivan, Hanuman and Kalabhairava. </p>
                            
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src={iskontemple} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Iskon Temple</h5>
                            <p className="card-text">Let the melodies of Shri Krishna' soothing hymns and let its vibrations heal you at ISKCON Indore. The mesmerizingly beautiful deities of Radha and Krishna are made purely from marble and invoke a sense of calm within you.</p>
                            
                        </div>
                    </div>
                    <a href="/temples" className="button">View more</a>
                </div>
            </div>

            <h1 className='text-center my-6' style={{ marginTop: '4rem', marginBottom: '45px' }}> Waterfalls near Indore</h1>
            <div className='container'>
                <div className='row '>
                    <div className="card col-md-4" >
                        <img src={patalpani} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Patal Pani</h5>
                            <p className="card-text">The Patalpani Waterfall is located in the Mhow Tehsil of Indore district and is a popular picnic spot for the locals of the area. Surrounded by dense forest covers and majestic hills Patalpani plummets from a height of 300 metres.</p>
                            
                        </div>
                    </div>
                    <div className="card col-md-4" >
                        <img src={mohadi} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mohadi Falls</h5>
                            <p className="card-text">The breathtaking sight of water falling from a height is always thrilling, and Mohadi Waterfalls are just the perfect spot where you would take your family to visit for a picnic. Easily accessible, the Waterfall is located at a distance of 30 kms from Indore, it is an idyllic picnic spot if you are looking for a break from the monotony of life and want to be with your family. </p>
                           
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src={tincha} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tincha Falls</h5>
                            <p className="card-text">Located 25 kilometres from the bustling city of Indore, Tincha Falls are one of the most popular waterfalls in the region. The milky white cascade is located in the Tincha village, also where the falls derive their name from. The roaring plunge of water at a height of 300 feet is a rain fed waterfall and is primarily a monsoon destination. </p>
                           
                        </div>
                    </div>
                    <a href="/waterfall" className="button">View more</a>
                </div>
            </div>
            <h1 className='text-center my-6' style={{ marginTop: '4rem', marginBottom: '45px' }}> Top Hotels in Indore</h1>
            <div className='container'>
                <div className='row '>
                    <div className="card col-md-4" >
                        <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1200/423327202.jpg?k=52850dfec63539211314f27811d66971a705f23c85419d2e8c716b0aa48db18a&o=" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sayaji Indore</h5>
                            <p className="card-text">Hotel Sayaji Indore is a comfortable and well-maintained hotel in Indore, India. The rooms are clean and spacious, providing a pleasant stay for guests. The hotel offers a range of amenities including a restaurant, bar, sauna, fitness centre, business centre, laundry facilities, and an outdoor pool.</p>
                           
                        </div>
                    </div>
                    <div className="card col-md-4" >
                        <img src={essentia} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Essentia Indore</h5>
                            <p className="card-text">Located in Indore, 4.3 km from Indore Junction Station, Essentia Luxury Hotel Indore provides accommodation with an outdoor swimming pool, free private parking, a fitness centre and a garden. Among the facilities of this property are a restaurant, a shared lounge and room service, along with free WiFi throughout the property.</p>
                            
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/461653144.jpg?k=56f754191b484584daef8db9cf251936f841cfc90569e75f09a36196d7bc4f68&o=&hp=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indore Marriott Hotel</h5>
                            <p className="card-text">Featuring a fitness centre and garden, Indore Marriott Hotel is a hotel is set in Indore, 5 km from ISKCON Indore. Among the various facilities of this property are a bar and on-site dining. The tour desk is available to assist guests in planning their days out. Free parking is available. </p>
                          
                        </div>
                    </div>
                    <a href="/hotels" className="button">View more</a>
                </div>
            </div>

            <h1 className='text-center my-6' style={{ marginTop: '4rem', marginBottom: '45px' }}> Shopping Malls in Indore</h1>
            <div className='container'>
                <div className='row '>
                    <div className="card col-md-4" >
                        <img src="https://www.phoenixcitadel.in/HomePageImages/9624d15d-523a-49e6-b85b-ae25fbc65fee_Phoenix%20Mall%20%20Courtyard%20Cam12.jpg" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Phoenix Citadel</h5>
                            <p className="card-text">Phoenix Citadel Mall is a shopping mall in the city of Indore, Madhya Pradesh, India. It is owned by Phoenix Mills Ltd, they operate 10 malls across 7 cities of India.
                                The mall is spread over 3 floors and has a dedicated building for parking. It has 1,000,000 leasing area for shopping brands. It has a dedicated open area in front of the mall as well.</p>
                           
                        </div>
                    </div>
                    <div className="card col-md-4" >
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/treasureisland_20190520085908.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Treasure Island Mall</h5>
                            <p className="card-text">Treasure Island Mall is a top-rated, and one of the most popular malls in Indore which occupies an area of 1,00,000 square feet. This mall in Indore has both, retail and service outlets, a food court, a cinema hall, and much more! It houses top clothing and accessories brands like Global Desi, Levi's, Allen Solly, Lavie, Reebok, and also offers pocket-friendly options, in the form of stores like Reliance Trends, Max, etc. So you can now shop till your heart's content.</p>
                           
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/c21_20190520090601.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">C21 Mall</h5>
                            <p className="card-text">C21 Mall, also called the Century 21 Mall, is another famous mall in Indore. It satisfies every need of the customer, whether it is for shopping, dining, or entertainment. It has a Hypermarket, that consists of all the top fashion brands like Globus, Adidas, Levi's etc. It also offers different stores for groceries, electronic items, toys, and so on. You can shop for anything and everything over here!</p>
                          
                        </div>
                    </div>
                    <a href="/shopping" className="button">View more</a>
                </div>
            </div>
            <h1 className='text-center my-6' style={{ marginTop: '4rem', marginBottom: '45px' }}> Street Food Bazar </h1>
            <div className='container'>
                <div className='row '>
                    <div className="card col-md-4" >
                        <img src="https://nanchiblog.files.wordpress.com/2020/08/dahi-wada-joshi-dahi-wada-house-sarafa-bazar-indore.jpg?w=799" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Sarafa Bazar</h5>
                            <p className="card-text">The lip-smacking flavours of the food stalls in Sarafa Bazaar are a testimony to Indore's legendary love affair with food. Entertaining over 3000 visitors every day, the Sarafa Bazaar houses stalls that sell vividly coloured artificial jewellery, brass ornaments and mouth-watering dishes of the diverse cuisine of Indore. There are more than 50 dishes available here at extremely low rates.</p>
                          
                        </div>
                    </div>
                    <div className="card col-md-4" >
                        <img src="https://travelophia.com/wp-content/uploads/2023/02/Chappan-Dukan.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">56 Dukan Indore</h5>
                            <p className="card-text">Chhappan Dukaan is one of Indore's choicest street food hubs that serve specials, chaat, idli and dosa with equal gusto. Chhappan Dukaan literally means fifty-six shops. At the time when it was established, 56 separate shops were started here, all selling food items. The evenings light the place up like nothing else with people consuming the delectable spread with enthusiasm.</p>
                           
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src="https://www.holidify.com/images/attr_square/6232.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Meghdoot garden chopati </h5>
                            <p className="card-text">It's a huge street-food chaupati that has evolved in Indore, recently, over few years !! A very wide variety of foods are available here, right outside the Meghdoot Upwan (garden) !! Indore's street food is a delightful blend of savory, spicy, and sweet flavors, and it reflects the city's rich culinary heritage.</p>
                           
                        </div>
                    </div>
                    <a href="/restaurants" className="button">View more</a>
                </div>
            </div>
            <h1 className='text-center my-6' style={{ marginTop: '4rem', marginBottom: '45px' }}> Top Educational Institutions in Indore</h1>
            <div className='container'>
                <div className='row '>
                    <div className="card col-md-4" >
                        <img src="https://images.shiksha.com/mediadata/images/1488192890phpGsZUQl.png" 
                        className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian Institute of Technology Indore (IIT) </h5>
                            <p className="card-text">
                                The Indian Institute of Technology Indore (IIT Indore) is one of the premier engineering institutes in India. Established in 2009, it is part of the prestigious Indian Institutes of Technology (IIT) system, which is known for its academic excellence and contribution to technical education and research. IIT Indore is located in Simrol, Indore, Madhya Pradesh.</p>
                            
                        </div>
                    </div>
                    <div className="card col-md-4" >
                        <img src="https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/IIM_Indore_banner_486b65e752.webp" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Indian Institute of Management Indore (IIM)</h5>
                            <p className="card-text">The Indian Institute of Management Indore (IIM Indore) is one of the premier business schools in India. Established in 1996, IIM Indore is known for its academic excellence, leadership development, and contribution to the field of management education. It is located in Indore, Madhya Pradesh.</p>
                            
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src="https://static.toiimg.com/thumb/msid-77385184,width-400,resizemode-4/77385184.jpg"  className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Devi Ahilya Vishwavidyalaya (DAVV) </h5>
                            <p className="card-text">
                                Devi Ahilya Vishwavidyalaya (DAVV), also known as DAVV Indore, is a prominent public university located in Indore, Madhya Pradesh, India. Established in 1964, the university is named after Maharani Devi Ahilya Bai Holkar, the revered ruler of the Holkar dynasty in the 18th century. DAVV has earned recognition for its contributions to higher education, research, and overall academic excellence. Here are some key aspects and information about Devi Ahilya Vishwavidyalaya</p>
                           
                        </div>
                    </div>
                    <a href="/education" className="button">View more</a>
                </div>
            </div>
            <h1 className='text-center my-6' style={{ marginTop: '4rem', marginBottom: '45px' }}> Outskirts of Indore </h1>
            <div className='container'>
                <div className='row '>
                    <div className="card col-md-4" >
                        <img src={janapav} className="card-img-top" alt='..'/>
                        <div className="card-body">
                            <h5 className="card-title">Janapav </h5>
                            <p className="card-text">
                            Nestled among similar hills of the Malwa region, Janapav or Janapav Kuti is the ideal getaway for lovers of nature and trekkers alike. If you’re looking to traverse through twisty bends in Central Indian forests while peacefully gazing over distant hills and the crimson sunset, this hill station should be your destination. Located on the Mumbai-Indore highway and in the Mhow Tehsil of Indore district</p>
                           
                        </div>
                    </div>
                    <div className="card col-md-4" >
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/15155968280_5eea887571_z_20190208105130.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Choral Dam</h5>
                            <p className="card-text"> Located in the state of Madhya Pradesh, Choral Dam is a hidden gem that will definitely provide you with quietness and tranquility. Constructed around the backwaters of River Narmada, Choral Dam is replete with cool and clear water. A large number of lush green trees and small hills surround the place making it even more attractive. </p>
                            
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/Kanthanpara_waterfalls_20180517182005_20181003154426.JPG" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Bamniya Kund </h5>
                            <p className="card-text">
                            Bamniya Kund is a captivating waterfall 50 kms from Indore in Madhya Pradesh. Falling from a height of 300 feet, the waters gush down creating a colourful pool of clear blue waters, brown rocks and verdant green bushes. Nestled away in the depth of dense forests in the Malindi region near Indore, the waterfall is hidden away from the clearing.</p>
                           
                        </div>
                    </div>
                    <a href="/temples" className="button">View more</a>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}
