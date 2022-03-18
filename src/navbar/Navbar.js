import "./navbar.css";
import logo from "../assets/logo.svg";
import { useEffect, useState } from "react";
import PlatformImg from "..//assets/platform.svg";
import GetListedImg from "..//assets/whyget-listed.svg";
import AllCategoriesImg from "..//assets/see-all-categories.svg";
import DealZoneImg from "..//assets/deal-zone.svg";
import DirectoryImg from "..//assets/directory.svg";
import MarketPLaceImg from "..//assets/platform.svg";
import ComparePlansImg from "..//assets/compare-plans.svg";
import SolutionsImg from "..//assets/Solutions.svg";
import NewsroomImg from "..//assets/Newsroom.svg";
import BlogImg from "..//assets/Blog.svg";
import AboutImg from "..//assets/About.svg";
import TeamImg from "..//assets/Team.svg";
import CareersImg from "..//assets/Careers.svg";
import AdvertiseImg from "..//assets/Advertise.svg";
import ContactUsImg from "..//assets/email-contact.svg";

export default function () {
  const [click, setClick] = useState(false);

  useEffect(() => {
    setClick(!click);
  }, []);

  const buttonAnimation = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const menuDiv = document.querySelector(".toggle-navbar-div");
    const logo = document.querySelector(".navbar-logo-div");
    const responsiveNav = document.querySelector(".toggle-navbar-div");
    if (click) {
      menuBtn.classList.add("open");
      menuDiv.style.display = "block";
      logo.style.opacity = 0;
      responsiveNav.classList.remove("addAnimation")      
      setClick(!click);
      console.log("opened");

    } else {
      menuBtn.classList.remove("open");
      menuDiv.style.display = "none";
      
      logo.style.opacity = 1;
      setClick(!click);
      console.log("closed");
    }
  };

  return (
    <div className="navbar-container">


      <div className="toggle-navbar-div" id="toggle-navbar-div">
        <div className="toggle-navbar-div-wrapper">
        <div className="toggle-product-section-title">PRODUCT</div>

          <div className="toggle-product-section">
                    {/* LEFT side product */}
              <div className="toggle-product-left-column">
                <a className="toggle-product-platform">
                  <img src={MarketPLaceImg} className="hovering-images-div"></img>
                  <div className="toggle-product-platform-text">Platform</div>
                </a>

                <a className="toggle-product-get-listed">
                  <img src={GetListedImg} className="hovering-images-div"></img>
                  <div className="toggle-product-get-listed-text">Get Listed</div>
                </a>

                <a className="toggle-product-all-categories">
                  <img src={AllCategoriesImg} className="hovering-images-div"></img>
                  <div className="toggle-product-all-categories-text">See All Categories</div>
                </a>

                <a className="toggle-product-plans">
                  <img src={ComparePlansImg} className="hovering-images-div"></img>
                  <div className="toggle-product-plans-text">Compare Plans</div>
                </a>
              </div>
                    {/* RIGHT side product */}
              <div className="toggle-product-right-column">
                <a className="toggle-product-deal-zone">
                  <img src={DealZoneImg} className="hovering-images-div"></img>
                  <div className="toggle-product-deal-zone-text">Deal Zone</div>
                </a>

                <a className="toggle-product-directory">
                  <img src={DirectoryImg} className="hovering-images-div"></img>
                  <div className="toggle-product-directory-text">Directory</div>
                </a>
                {/* INVISIBLE side product */}
                
              </div>
              <div className="toggle-product-right-column-inv">
                  <a className="toggle-product-deal-zone">
                    <img src={DealZoneImg} className="hovering-images-div"></img>
                    <div className="toggle-product-deal-zone-text">Deal Zone</div>
                  </a>
                </div>
          </div>

          <div className="toggle-resources-section-title">RESOURCES</div>
          <div className="toggle-resources-section">
                    {/* LEFT side product */}
              <div className="toggle-resources-left-column">
                <a className="toggle-resources-platform">
                  <img src={MarketPLaceImg} className="hovering-images-div"></img>
                  <div className="toggle-resources-platform-text">Solutions</div>
                </a>

              </div>
                    {/* RIGHT side product */}
              <div className="toggle-resources-right-column">
                <a className="toggle-resources-deal-zone">
                  <img src={NewsroomImg} className="hovering-images-div"></img>
                  <div className="toggle-resources-deal-zone-text">Newsroom</div>
                </a>

                <a className="toggle-resources-directory">
                  <img src={BlogImg} className="hovering-images-div"></img>
                  <div className="toggle-resources-directory-text">From the Blog</div>
                </a>
                {/* INVISIBLE side product */}
                
              </div>
              <div className="toggle-resources-right-column-inv">
                  <a className="toggle-resources-deal-zone">
                    <img src={DealZoneImg} className="hovering-images-div"></img>
                    <div className="toggle-resources-deal-zone-text">Deal Zone</div>
                  </a>
                </div>
          </div>

          <div className="toggle-company-section-title">COMPANY</div>
          <div className="toggle-company-section">
                    {/* LEFT side product */}
              <div className="toggle-company-left-column">
                <a className="toggle-company-platform">
                  <img src={AboutImg} className="hovering-images-div"></img>
                  <div className="toggle-company-platform-text">About</div>
                </a>
                <a className="toggle-company-platform">
                  <img src={CareersImg} className="hovering-images-div"></img>
                  <div className="toggle-company-platform-text">Careers</div>
                </a>

                <div className="toggle-company-right-column-inv-imposter">
                  <a className="toggle-company-deal-zone">
                    <img src={ContactUsImg} className="hovering-images-div"></img>
                    <div className="toggle-company-deal-zone-text">Contact</div>
                  </a>
              </div>

              </div>
                    {/* RIGHT side product */}
              <div className="toggle-company-right-column">
                <a className="toggle-company-deal-zone">
                  <img src={TeamImg} className="hovering-images-div"></img>
                  <div className="toggle-company-deal-zone-text">Team</div>
                </a>

                <a className="toggle-company-directory">
                  <img src={AdvertiseImg} className="hovering-images-div"></img>
                  <div className="toggle-company-directory-text">Advertise</div>
                </a>

                

                
                
                {/* INVISIBLE side product */}
                
              </div>
              <div className="toggle-company-right-column-inv">
                  <a className="toggle-company-deal-zone">
                    <img src={ContactUsImg} className="hovering-images-div"></img>
                    <div className="toggle-company-deal-zone-text">Contact</div>
                  </a>
              </div>
          </div>




          <div className="toggle-buttons-section">
                    {/* LEFT side product */}
              <div className="toggle-buttons-left-column">
                <a className="toggle-buttons-platform">
                  <img src={MarketPLaceImg} className="hovering-images-div"></img>
                  <div className="toggle-buttons-platform-text">Platform</div>
                </a>

              </div>
                    {/* RIGHT side product */}
              <div className="toggle-buttons-right-column">
                <a href="https://enterpriseleague.com/registration"className="toggle-buttons-deal-zone">
                <button className="register-company">Register your company</button>
                </a>

                {/* INVISIBLE side product */}
                
              </div>
              <div className="toggle-buttons-right-column-inv">
                  <a href="https://enterpriseleague.com/login"className="toggle-buttons-deal-zone">
                  <button className="login-button">Log in</button>
                  </a>
                </div>
          </div>

        </div>
      </div>


      <div className="navbar-wrapper">
        <div className="left-navbar">
          <a href="https://enterpriseleague.com" className="navbar-logo-div">
            <img src={logo} className="logo"></img>
          </a>
          <a className="product-div">
            <h4 className="product-title">Product</h4>
            <span className="arrow"></span>

            <div className="wrp">
              <div className="product-hover-content">
                <div className="product-hover-content-wrapper">
                  <div className="product-overview-wrapper">
                    <div className="product-overview-title">OVERVIEW</div>

                    <div className="product-platform">
                      <img src={PlatformImg} className="hovering-images"></img>
                      <a href="https://enterpriseleague.com/product"
                        className="product-platform-text"
                      >&nbsp;Platform</a>
                    </div>

                    <div className="product-get-listed">
                      <img src={GetListedImg} className="hovering-images"></img>
                      <a
                        href="https://enterpriseleague.com/why-get-listed"
                        className="product-get-listed-text"
                      >
                        &nbsp;Get Listed
                      </a>
                    </div>

                    <div className="product-see-all-categories">
                      <img
                        src={AllCategoriesImg}
                        className="hovering-images"
                      ></img>
                      <a
                        href="https://enterpriseleague.com/hire"
                        className="product-see-all-categories-text"
                      >
                        &nbsp;See all categories
                      </a>
                    </div>
                  </div>
                </div>

                <div className="product-hover-content-wrapper">
                  <div className="product-overview-wrapper">
                    <div className="product-overview-title">FEATURES</div>

                    <div className="product-platform">
                      <img src={DealZoneImg} className="hovering-images"></img>
                      <a className="product-platform-text">&nbsp;Deal Zone</a>
                    </div>

                    <div className="product-get-listed">
                      <img src={DirectoryImg} className="hovering-images"></img>
                      <a className="product-get-listed-text">&nbsp;Directory</a>
                    </div>

                    <div className="product-see-all-categories">
                      <img
                        src={MarketPLaceImg}
                        className="hovering-images"
                      ></img>
                      <a className="product-see-all-categories-text">
                        &nbsp;MarketPlace
                      </a>
                    </div>
                  </div>
                </div>

                <div className="product-hover-content-wrapper">
                  <div className="product-overview-wrapper">
                    <div className="product-overview-title">PLANS</div>

                    <div className="product-platform">
                      <img
                        src={ComparePlansImg}
                        className="hovering-images"
                      ></img>
                      <a
                        href="https://enterpriseleague.com/pricing"
                        className="product-platform-text"
                      >
                        &nbsp;Compare all plans
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a className="resources-div">
            <h4 className="resources-title">Resources</h4>
            <span className="arrow"></span>

            <div className="wrp-r">
              <div className="resources-hover-content">
                <div className="resources-hover-content-wrapper">
                  <div className="resources-overview-wrapper">
                    <a
                      href="https://enterpriseleague.com/solutions"
                      className="resources-platform"
                    >
                      <img src={SolutionsImg} className="hovering-images"></img>
                      <a href="" className="resources-platform-text">
                        &nbsp;Solutions
                      </a>
                    </a>

                    <a
                      href="https://enterpriseleague.com/about/newsroom"
                      className="resources-get-listed"
                    >
                      <img src={NewsroomImg} className="hovering-images"></img>
                      <a href="" className="resources-get-listed-text">
                        &nbsp;Newsroom
                      </a>
                    </a>
                  </div>
                  <div className="blog">
                    <a
                      href="https://enterpriseleague.com/blog/"
                      className="blog-flex"
                    >
                      <img src={BlogImg} className="hovering-images"></img>
                      <div className="blog-text">&nbsp;From the Blog</div>
                    </a>
                    <div className="blog-text-flex">
                      <a
                        href="https://enterpriseleague.com/blog/buyer-supplier-relationships/"
                        className="blog-text-link"
                      >
                        Why are buyer-supplier relationships important and how
                        to nurture them
                      </a>
                      <a
                        href="https://enterpriseleague.com/blog/how-to-start-a-wholesale-business/"
                        className="blog-text-link"
                      >
                        How to start a wholesale business from scratch and
                        succeed
                      </a>
                      <a
                        href="https://enterpriseleague.com/blog/b2b-marketing-tips/"
                        className="blog-text-link"
                      >
                        18 B2B marketing tips to bring you success in 2021
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a className="company-div">
            <h4 className="company-title">Company</h4>
            <span className="arrow"></span>
            <div className="wrp-c">
              <div className="company-hover-div">
                <div className="company-hover-div-wrapper">

                  <div className="first-column-flex">
                    <a href="https://enterpriseleague.com/about-us" className="company-hover-item">
                      <img src={AboutImg} className="hovering-images"></img>
                      <div className="company-hover-text">&nbsp;About</div>
                    </a>
                    <a href="https://enterpriseleague.com/about/team" className="company-hover-item">
                      <img src={TeamImg} className="hovering-images"></img>
                      <div className="company-hover-text">&nbsp;Team</div>
                    </a >
                    <a className="company-hover-text-displaynone">dasd</a>
                  </div>

                  <div className="second-column-flex">
                    <a href="https://enterpriseleague.com/blog/careers/"className="company-hover-item">
                      <img src={CareersImg} className="hovering-images"></img>
                      <div className="company-hover-text">&nbsp;Careers</div>
                    </a>
                    <a href="https://enterpriseleague.com/blog/advertise-with-us/" className="company-hover-item">
                      <img src={AdvertiseImg} className="hovering-images"></img>
                      <div className="company-hover-text">&nbsp;Advertise</div>
                    </a>
                    <a href="https://enterpriseleague.com/blog/contact/" className="company-hover-item">
                      <img src={ContactUsImg} className="hovering-images"></img>
                      <div className="company-hover-text">&nbsp;Contact Us</div>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="right-navbar">
          <a href="https://enterpriseleague.com/login"><button className="login-button">Log in</button></a>
          <a href="https://enterpriseleague.com/registration"><button className="get-started-button">Get Started</button></a>
        </div>

        <div className="hamburger">
          <div className="menu-btn" onClick={buttonAnimation}>
            <div className="menu-btn__burger"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
