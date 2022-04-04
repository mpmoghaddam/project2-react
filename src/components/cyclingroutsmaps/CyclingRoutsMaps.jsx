import React from 'react';
import './cyclingroutsmaps.css';
import hornbybeforeafter from '../../assets/hornbybeforeafter.jpg';
import bicycleparking from '../../assets/bicycleparking.jpg';
import traditionalrack from '../../assets/traditionalrack.jpg';
import ushaperack from '../../assests/ushaperack.jpg';
const CyclingRoutsMaps = () => {
    return(
    <div className ="myapp__cycling section__padding" id ="cyclingroutsmaps">
        <div className="myapp__cycling__container">
            <div calssName = "myapp__cycling__container">
                <div className ="myapp__cycling__container__heading">
                    <div className ="myapp__cycling__container__heading-h2">
                      <h2>Protected bicycle lanes</h2>
                        <div className ="myapp__cycling__container__heading-p" >
                          <p>Nearly xxx% of all trips and over xxx% of commute trips in Calgary are by bike, exceeding the City’s 2025 target of xxx% and on track to achieve the 2040 target of xxx%.</p><br />
                          <p>To help build on this shift, we have made cycling a much safer and more attractive option, by adding protected bike lanes to key city streets.</p><br />
                        </div>
                        <div className ="myapp__cycling__container__heading-h2">
                          <h2>Protected bike lanes increase both cycling and walking trips</h2>
                        </div>
                        <div className ="myapp__cycling__container__heading-p" >
                          <p>Protected bicycle lanes are dedicated bike lanes with concrete medians and planters, bicycle parking corrals, or vehicle parking lanes that divide them from vehicle traffic.</p><br />
                          <p>This separation increases feelings of safety and comfort, which makes cycling an attractive commuting option for those who are not used to riding their bikes regularly.</p><br />
                          <p>When people walking know that people won't be riding their bikes on the sidewalks, walking feels more comfortable, as well.</p>
                        </div>
                        <div></div>
                        <div className ="myapp__cycling__container__heading-h2">
                          <h2>Protected bike lanes in downtown Calgary</h2>
                        </div>
                        <div className ="myapp__cycling__container__heading-p" >
                          <p>We have protected bike lanes on many downtown streets. </p><br />
                        </div>
                        <div className ="myapp__cycling__painted-with-img">
                          <div className ="myapp__cycling__container__heading-h2">
                            <h2>Painted bike lanes and protected bike lanes</h2>
                              <div className ="myapp__cycling__container__heading-p4" >
                                <p>This drawing shows the difference between the previously painted bike lane and the current protected bike lanes on 9th Avenue. </p><br />
                                <p>On 11th avenue, protected bike lanes provide two-way travel for people cycling on the same side. This can create the need for additional traffic signals for both cycling and walking traffic.</p>
                                  <div className="myapp__cycling-painted-img">
                                    <img src ={hornbybeforeafter} />
                                  </div>
                                </div>
                              </div>   
                              </div>           
                          </div>
                        </div>
                        
                            <div className ="myapp__cycling__container__heading-p" >
                              <p>On avenue such as 6th, the protected bike lanes are one-way on one or two sides of the street. Please ride safely, and ensure you are riding the right way in a one-way bike lane.</p>
                            </div>
                        
<br /><br />

                        <div className ="myapp__cycling__container__heading-h2-parking">
                             <h2>Bicycle parking and air pumps</h2>
                           <div className ="myapp__cycling__container__heading-p-parking" >
                             <p>We install convenient bike parking throughout Calgary.</p><br />
                             <p>Our bike racks keep your bike out of the way of people walking and provide greater security than locking your bicycle to sign posts.</p><br />
                             <div className="myapp__cycling-parking-img">
                                    <img src ={bicycleparking} />
                             </div>
                          </div>
                        </div>
                        <div classname = "myapp__cycling__heading-bikeparking">
                          <div className= "myapp__cycling__heading-traditionalbikeracks">
                            <div className ="myapp__cycling__content-traditionalbikeracks">
                              <div className ="myapp__cycling-img-traditionalbikeracks">
                                <h1>Types of bike parking</h1>
                                <h2>Traditional bike racks</h2>
                                <p>Bike racks provide quick places to lock your bicycle. The City installs several around Vancouver. Businesses may install bike racks to support their customers. Free public bicycle racks are also available at downtown EasyPark lots.</p>
                                <img src={traditionalrack} />
                              </div>
                            </div>
                          </div>
                          <div className= "myapp__cycling__heading-ushapebikeracks">
                            <div className ="myapp__cycling__content-ushapebikeracks">
                              <div clssName ="myapp__cycling-img-ushapebikeracks">
                                <h2>U-shaped bike racks</h2>
                                <p>These racks lock up to two bikes at a time and use less sidewalk space than traditional racks. U-shaped bike racks are accessible and attractive, eliminate clutter from sidewalks, and reduce hazards to people walking on sidewalks.</p>
                                <img src= {ushaperack} alt="" />
                              </div>

                            </div>

                          </div>
                      </div>  
                        
                   </div> 
                </div>
                </div>
           
        
    )
}









export default CyclingRoutsMaps;