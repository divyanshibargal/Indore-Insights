import axios from 'axios';

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng';

const options = {
  params: {
    latitude: '22.719568',
    longitude: '75.857727',
  },
  headers: {
    'X-RapidAPI-Key': 'd3691571c8msh6442b0b5e277e38p199764jsn7fb44f099b0a',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


export const getPlaceData = async ()=>{
    try{
        const { data :{ data }} = await axios.get(URL ,options);
        return data;
    }
    catch(error){
     console.log(error);
    }
}