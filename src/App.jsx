import logo from "./assets/logo.png";
import avatar from "./assets/avatar.jpeg";
import heart from "./assets/heart-outline.svg";
import likedHeart from "./assets/heart.png";
import fivestar from "./assets/fivestar.png";
import fourstar from "./assets/fourstar.png";
import blackHoodieImage from './assets/blackhoodie.png';
import greyHoodieImage from './assets/greyhoodie.png';
import blueHoodieImage from './assets/bluehoodie.png';
import camoHoodieImage from './assets/camohoodie.png';
import { useState } from "react";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  function close() {
    setMenuOpen(false);
  }

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  function color() {
    setIsLiked(!isLiked);
  }

  const [currentImage, setCurrentImage] = useState(blackHoodieImage);

  // State for the "read more" toggle
  const [showMore, setShowMore] = useState(false);

  // Handlers for changing hoodie images
  const blackHoodie = () => setCurrentImage(blackHoodieImage);
  const greyHoodie = () => setCurrentImage(greyHoodieImage);
  const blueHoodie = () => setCurrentImage(blueHoodieImage);
  const camoHoodie = () => setCurrentImage(camoHoodieImage);

  // Handler for toggling the "read more" text
  const toggleReadMore = () => setShowMore(!showMore);

  return (
    <div>
      <header>
        <nav>
          <h1 id="logo"><span><img src={logo} alt="logo" /></span> Tokoo </h1>
          <input type="checkbox" id="check" checked={isMenuOpen} onChange={toggleMenu} />
          <ul className={`menu ${isMenuOpen ? "open" : "closed"}`}>
            <li> 
              <a href="#">Categories: <input type="text" placeholder="Search Product" /></a> 
              <a href="#" id="search" onClick={close}> 
                <ion-icon name="search-outline"></ion-icon> 
              </a> 
            </li>
            <label htmlFor="check" className="close-menu">
              <ion-icon name="close-outline"></ion-icon>
            </label>
          </ul>
          <label htmlFor="check" className="open-menu">
            <ion-icon name="menu-outline"></ion-icon>
          </label>
          <ul className="tags">
            <li><ion-icon name="bookmark-outline"></ion-icon></li>
            <li id="heart">
              <img 
                onClick={color} 
                id="likes" 
                src={isLiked ? likedHeart : heart} // Conditionally render the heart icon
                alt="heart icon" 
              />
            </li>
            <li><ion-icon name="cart-outline"></ion-icon></li>
            <li><img id="avatar" src={avatar} alt="avatar" /></li>
          </ul>
        </nav>
        <div className="landing">
          <div className="landing-info">
            <h1>Classic Cream</h1>
            <h1>Hoodie Top</h1>

            <p>Light breathable hoodie for any condition.</p>

            <h2>$82.61 <span><del>$153.92</del></span></h2>

            <button>View More</button>
          </div>
        </div>
      </header>
      <main>
        <h1>Trending Products</h1>
        <div className="products-box">
          <div className="products">
            <div className="product-image1"></div>
            <div className="product-info">
              <h2>Long Sleeve Red Shirt</h2>
              <p>From United Stated</p>
              <h4><span><img src={fivestar} alt="" /></span> (1,654)</h4>
              <h3>$34.54 <del>$43.53</del></h3>
            </div>
          </div>
          <div className="products">
            <div className="product-image2"></div>
            <div className="product-info">
              <h2>White Sweater Casual</h2>
              <p>From France</p>
              <h4><span><img src={fivestar} alt="" /></span> (6,654)</h4>
              <h3>$40.54 <del>$53.53</del></h3>
            </div>
          </div>
          <div className="products">
            <div className="product-image3"></div>
            <div className="product-info">
              <h2>Pink T-Shirt Oversized</h2>
              <p>From Indonesia</p>
              <h4><span><img src={fourstar} alt="" /></span> (2,504)</h4>
              <h3>$28.54 <del>$37.53</del></h3>
            </div>
          </div>
          <div className="products">
            <div className="product-image4"></div>
            <div className="product-info">
              <h2>Black T-Shirt Oversized</h2>
              <p>From Indonesia</p>
              <h4><span><img src={fivestar} alt="" /></span> (8,654)</h4>
              <h3>$24.54 <del>$33.53</del></h3>
            </div>
          </div>
        </div>
        <div className="my-product-box">
      <div className="product-nav">
        <ul className="desktop">
          <li onClick={blackHoodie} id="img-box1"></li>
          <li onClick={greyHoodie} id="img-box2"></li>
          <li onClick={blueHoodie} id="img-box3"></li>
          <li onClick={camoHoodie} id="img-box4"></li>
        </ul>
        <section id="product-image" style={{ backgroundImage: `url(${currentImage})` }}>
          {/* Product image section now controlled by React's state */}
        </section>
        <ul className="mobile">
          <li onClick={blackHoodie} id="img-box1"></li>
          <li onClick={greyHoodie} id="img-box2"></li>
          <li onClick={blueHoodie} id="img-box3"></li>
          <li onClick={camoHoodie} id="img-box4"></li>
        </ul>
      </div>
      <div className="product-info">
        <div className="title">
          <p>Jolt/Jackets</p>
          <h1>Boa Fleece Jackets</h1>
          <h2>$122.00 <del>$129.00</del> <button>5% Disc</button></h2>
          <ul>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star"></ion-icon></li>
            <li><ion-icon name="star-outline"></ion-icon></li>
            <li><span>(4.9)</span> 1.2K Reviews</li>
          </ul>
        </div>
        <div className="desc">
          <h1>Descriptions</h1>
          <p>
            Introducing the Boa Fleece Winter Jacket, designed to keep you warm and comfortable during the coldest winter days. 
            Crafted from high-quality fleece material, this jacket offers superior insulation and softness, making it the perfect 
            choice for outdoor activities or everyday wear. The jacket features a stylish and functional design, with a 
            <span id="dots">...</span>
            {showMore && (
              <span id="more">
                fleece-lined hood, durable zippers, and spacious pockets. Stay warm and look great this winter with our Boa Fleece Winter Jacket.
              </span>
            )}
            <button onClick={toggleReadMore} id="morebtn">{showMore ? "less" : "more"}</button>
          </p>
        </div>
        <div className="info">
          <h1>Available Colors</h1>
          <ul className="colors">
            <li><button onClick={blackHoodie}></button></li>
            <li><button onClick={greyHoodie} id="grey"></button></li>
            <li><button onClick={blueHoodie} id="blue"></button></li>
          </ul>

          <h1>Size</h1>
          <ul className="size">
            <li>S</li>
            <li id="selected">M</li>
            <li>L</li>
            <li id="xl">XL</li>
          </ul>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
}

export default App;
