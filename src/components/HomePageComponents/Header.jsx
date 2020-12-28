import '../../styles/HomePageStyles/Header.css';
import headerImg1 from '../../images/HEADER1.jpg'
import headerImg2 from '../../images/HEADER2.jpg'
import headerImg3 from '../../images/HEADER3.jpg'
// the hook
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    // <div className="container-fluid header-container text-center">
    //   <h1 className="main-title">{t("WORRIED")}</h1>
    //   <h2 className="sub-title">{t("WHICH CAR TO CHOOSE")}</h2>
    // </div>
    < >
      <div id="carouselExampleSlidesOnly " class="carousel slide" data-ride="carousel" data-interval="2000">
        <div class="carousel-inner" >
          <div class="carousel-item active" >
            <div className='img_cont'>
              <img width='100%' src={headerImg1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block ">
              <h3>Your car says lot about you!</h3>
              <h5>Our powerful car comparison tool lets you compare multiple vehicles, so you can see how they stack up at a glance.</h5>
            </div>
            <div class=" d-block d-md-none mt-4  " style={{padding:'0 20px'}}>
              <h5>Your car says lot about you!</h5>
              <div>Our powerful car comparison tool lets you compare multiple vehicles, so you can see how they stack up at a glance.</div>
            </div>
          </div>
          <div class="carousel-item" >
            <div className='img_cont'>
              <img width='100%' src={headerImg2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block ">
              <h3>Comprehensive comparison from 2000 to 2021</h3>
              <h5>Just select the cars you're interested in from our comprehensive list and leave the rest to smartarz’s powerful comparison tool.</h5>
            </div>
            <div class=" d-block d-md-none mt-3  " style={{padding:'0 20px'}}>
              <h5>Comprehensive comparison from 2000 to 2021</h5>
              <div>Just select the cars you're interested in from our comprehensive list and leave the rest to smartarz’s powerful comparison tool.</div>
            </div>
          </div>
          <div class="carousel-item" >
            <div className='img_cont'>
              <img width='100%'  src={headerImg3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-caption d-none d-md-block ">
              <h3>Right car does make a difference</h3>
              <h5>Compare features, warranties, engines, fuel economy, passenger room and trunk space, and even ownership costs, together with ratings,pros and cons and MSRP.8</h5>
            </div>
            <div class=" d-block d-md-none mt-3  " style={{padding:'0 20px'}}>
              <h5>Right car does make a difference</h5>
              <div>Compare features, warranties, engines, fuel economy, passenger room and trunk space, and even ownership costs, together with ratings,pros and cons and MSRP.8</div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;
