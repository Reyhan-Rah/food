import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Ty_If2nKqU7NgOnc9kAY7APK7KK1xF2c1HxJymimcIquOq-CmQiOx4VV0tUGYhW0jUYvo8zu78gIvi_Q-mKSLkh66kyLsICagasztqZ9KOC5gEPXqtWpJ-RIVnSQXnYx'
    }
});