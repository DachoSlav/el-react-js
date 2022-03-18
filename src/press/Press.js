import "./press.css";
import img1 from "../assets/press-img-three.png";
import img2 from "../assets/press-img-two.png";
import img3 from "../assets/press-img-one.png";
import React, { useEffect } from 'react';
import { useState } from "react";

export default function () {

    const [clickedOne, setClickedOne] = useState(false);
    const [clickedTwo, setClickedTwo] = useState(false);
    const [clickedThree, setClickedThree] = useState(false);

    const readMoreFirst = () =>{ 
      setClickedOne(prevState => !prevState);
        if(!clickedOne){
          document.getElementById("first-text-added").style.display = "block";
        }else{
          document.getElementById("first-text-added").style.display = "none";
        }
    }

    const readMoreSecond = () =>{ 
      setClickedTwo(prevState => !prevState);
        if(!clickedTwo){
          document.getElementById("second-text-added").style.display = "block";
        }else{
          document.getElementById("second-text-added").style.display = "none";
        }
    }

    const readMoreThird = () =>{ 
      setClickedThree(prevState => !prevState);
        if(!clickedThree){
          document.getElementById("third-text-added").style.display = "block";
        }else{
          document.getElementById("third-text-added").style.display = "none";
        }
    }
   
  return (
    <div className="press-container">
      <div className="press-wrapper">
        <div className="press-item">
          <img src={img1} className="item-image"></img>
          <div className="item-right-content">
            <h4 className="press-item-title">
              2020 in review: A letter from our CEO and Co-Founder
            </h4>
            <div className="press-item-location">
              London, UK, December 30th, 2020
            </div>
            <div className="press-item-text" id="press-item-text">
              Another year is drawing to a close; and we once again find
              ourselves planning for the future, but also reflecting on the
              events of 2020 – we hope that despite the difficulties and
              uncertainty this year has brought, you have managed to stay strong
              and focused on the things you can control.
            </div>
          </div>
          
          <div className="press-item-location-new">
            London, UK, December 30th, 2020
          </div>
          <div className="press-item-text-new" id="press-item-text-new">
            Another year is drawing to a close; and we once again find ourselves
            planning for the future, but also reflecting on the events of 2020 –
            we hope that despite the difficulties and uncertainty this year has
            brought, you have managed to stay strong and focused on the things
            you can control.
          </div>
          <div className="firstText-added" id="first-text-added">
                In that manner, Enterprise League has continued to work hard on
                connecting businesses worldwide. Our focus has always been to
                bring more business opportunities to small businesses. Thus,
                seeing how severely they suffered due to the pandemic, our drive
                to improve the platform, and provide them with better solutions,
                only grew stronger.
                <br />
                <br />
                Thanks to nearly 100k new companies that joined the platform (a
                big milestone for us!) we got an unprecedented growth momentum
                which consequently brought us a humbling number of
                opportunities.
                <br />
                <br />
                This success didn’t pass unrecognised – we had the privilege of
                being named as one of the best business platforms by the
                Business Insider.
                <br />
                <br />
                Lead by the same currents of growth, this year we have formed
                deeper relationships with both new and old users, expanded our
                partners’ circle, and scaled our team.
                <br />
                <br />
                As we reflect, we think about who we are and who we want to be,
                both personally and as a company. A commitment to quality and
                value is one of our fundamental business principles, we firmly
                believe in excelling in what we promise and deliver.
                <br />
                <br />
                What we’re most proud of this year is that we’ve managed to
                provide the same high level of service and solutions to all
                companies, regardless of their background. Given that, we seek
                to make our solutions easily accessible – keeping the lines of
                communication open in order to help our users with their
                platform experience. We are committed to combine courage and
                wisdom to move forward; confidently pursuing growth and
                investment while not abandoning our values.
                <br />
                <br />
                It is our hope that these things have all been clearly evident
                in the past year, and that they continue into the future.
                Finally, we once again express our sincere appreciation to all
                of our users, readers and collaborators; wishing you and your
                families a bright hopeful start to 2021.
                <br />
                <br />
                Irina Georgieva
                <br />
                Co-founder and CEO of Enterprise League
              </div>

          <div className="read-more" onClick={readMoreFirst} >{clickedOne? "Read Less" : "Read More"}</div>
        </div>






        <div className="press-item">
          <img src={img2} className="item-image"></img>
          <div className="item-right-content">
            <h4 className="press-item-title">
              Over 100,000 companies join business platform since the virus
              crisis started
            </h4>
            <div className="press-item-location">
              London, UK, October 14th, 2020
            </div>
            <div className="press-item-text">
              London, UK, Oct 14th, Enterprise League today announced that it
              registered a huge increase of over 100,000 SMEs joining its
              business platform. Companies seek to minimise their business loss
              after their forced closure in more than 40 countries worldwide and
              ahead of a second lockdown. “The only way for companies to survive
              is to reinvent themselves” said Enterprise League’s CTO, Atanas
              Georgiev.
            </div>
            <div className="read-more"onClick={readMoreSecond} >{clickedTwo? "Read Less" : "Read More"}</div>
          </div>
          <div className="press-item-location-new">
            London, UK, October 14th, 2020
          </div>
          <div className="press-item-text-new">
            London, UK, Oct 14th, Enterprise League today announced that it
            registered a huge increase of over 100,000 SMEs joining its business
            platform. Companies seek to minimise their business loss after their
            forced closure in more than 40 countries worldwide and ahead of a
            second lockdown. “The only way for companies to survive is to
            reinvent themselves” said Enterprise League’s CTO, Atanas Georgiev.
          </div>
          <div className="secondText-added" id="second-text-added">
          Among these SMEs are companies from various industries including: technology, 
          retail, food, manufacturing, service providers and many more. Enterprise League 
          facilitates the remote connection between businesses. The smart AI algorithm matches
           companies that have potential to collaborate with each other. 74% of the suggested 
           business matches end up with a business deal.
                <br />
                <br />
                The business platform is meant for every business in the world, 
                from all sectors and all locations. Enterprise League is quickly becoming a 
                known platform to identify and access new business opportunities, 
                find business partners and close business deals all fully remotely.
                 Designed to help all companies, even the ones most at risk during this crisis.
                
              </div>
        </div>




        <div className="press-item">
          <img src={img3} className="item-image"></img>
          <div className="item-right-content">
            <h4 className="press-item-title">
              The Solution to the Global Business #Lockdown
            </h4>
            <div className="press-item-location">
              London, UK - March 26, 2020
            </div>
            <div className="press-item-text">
              London, UK, Oct 14th, Enterprise League today Enterprise League
              today has announced that the B2B platform through which companies
              collaborate remotely is open to SMEs for free. This action comes
              as an attempt to help SMEs minimise the losses they are incurring
              due to the forced lockdown imposed in more than 40 countries
              worldwide. Enterprise League facilitates the way SMEs find new
              business partnerships and deals through a sophisticated software
              powered by AI and machine learning.
            </div>
            <div className="read-more" onClick={readMoreThird}>{clickedThree? "Read Less" : "Read More"}</div>
          </div>
          <div className="press-item-location-new">
            London, UK - March 26, 2020
          </div>
          <div className="press-item-text-new">
            London, UK, Oct 14th, Enterprise League today Enterprise League
            today has announced that the B2B platform through which companies
            collaborate remotely is open to SMEs for free. This action comes as
            an attempt to help SMEs minimise the losses they are incurring due
            to the forced lockdown imposed in more than 40 countries worldwide.
            Enterprise League facilitates the way SMEs find new business
            partnerships and deals through a sophisticated software powered by
            AI and machine learning.
          </div>
          <div className="thirdText-added" id="third-text-added">
          SMEs can find opportunities that match their individual needs and allows
           them to publish business tenders as well as bid on tenders posted 
           by other companies. Meant for every business in the world, from all 
           sectors and all locations. Enterprise League is quickly becoming a known 
           platform to identify and access new business opportunities, find business
            partners and shake deals all completely remotely.
                <br />
                <br />
                “Amid this crisis the only way companies can survive is to
                 reinvent themselves” said Enterprise League CTO, Atanas Georgiev. 
                 Designed to help all companies, even the ones most at risk during this crisis.
                
              </div>
        </div>
      </div>
    </div>
  );
}
