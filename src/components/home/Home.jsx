import React from 'react';
import './home.css';
import threepeople from '../../assests/threepeople.jpg'
const Home = () => {
    return(
    <div className ="myapp__home section__padding" id ="home">
        <div className="myapp__home__container">
            <div calssName = "myapp__home__container-img">
                <img src ={threepeople} />
            
                <div className ="myapp__home__container__heading">
                  <div className ="myapp__home__container__heading-h2">
                    <h2>Cycling in Calgary</h2>
                  </div>
                  <div className ="myapp__home__container__heading-p" >
                    <p>Cycling is one of the cleanest and most energy efficient forms of transportation and the number of people choosing to cycle continues to grow every year.</p><br />
                    <p>Much of this growth comes from our support for green transportation initiatives to make cycling and walking more safe, convenient, and comfortable for people of all ages and abilities.</p><br />
                    <p>Expanding the bike route network is an important strategy in our effort to reduce traffic congestion to become more sustainable.</p>
                  </div>
                </div>
            </div>

        </div>
       
    </div>

    )
}







export default Home;