import { useDispatch, useSelector } from "react-redux";
import styles from "./Women.module.css";
import { GrNext } from "react-icons/gr";
import { MdAddShoppingCart } from "react-icons/md";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { shopCardAction } from "../store/shopCard";
import { FaArrowRightLong } from "react-icons/fa6";
import { loaderAction } from "../store/loader";
const Women = () => {
  const { shopCards, style } = useSelector((store) => store.shopCard);
  const { product } = useSelector((store) => store.sellerEverything);
  const dispatch = useDispatch();
  const getProductHome = async () => {
    const res = await axios.get("http://localhost:8080/producthome");
    console.log(res.data);
    dispatch(loaderAction.women());
    dispatch(shopCardAction.shopCardData({ data: res.data }));
  };
  useEffect(() => {
    getProductHome();
  }, []);
  const handleSort = () => {};
  const handleRangeChange = () => {};
  return (
    <main className={styles.parentConatiner}>
      <div className={styles.container}>
        <div className={styles.filter}>
          <div className={styles.searchBar}>
            <input
              placeholder="Search Products.."
              className={styles.searchInput}
            />
            <GrNext className={styles.buttonOfSearch} />
          </div>
          <div className={styles.filterDiv}>
            <p className={styles.filterText}>Filter by Price</p>
            <span className={styles.min}>Min</span>
            <input
              type="range"
              min="20"
              max="240"
              defaultValue="20"
              className={styles.range1}
              onChange={handleRangeChange}
            />
            <span className={styles.max}>Max</span>
            <input
              type="range"
              min="20"
              max="240"
              defaultValue="20"
              className={styles.range2}
              onChange={handleRangeChange}
            />

            <div className={styles.buttonFiltercontainer}>
              <button>FILTER</button>
              <p>
                Price: <span>20</span>-<span>290</span>
              </p>
            </div>
            <div className={styles.category}>
              <h3>Categories</h3>
              <p>
                <Link  className={styles.link} to="/men">Men <span>(20)</span></Link>
              </p>
              <p>
                <Link className={styles.link} to="/women">Women <span>(20)</span></Link> 
              </p>
              <p>
                <Link className={styles.link} to="/accessories">Accessories <span>(20)</span></Link> 
              </p>
            </div>
            <div className={styles.sellerContainer}>
              <h3>Our Best Sellers</h3>
              {product.map((item) => (<div className={styles.ProductContainer}>
                <img src={item.img} alt="" />
                <div className={styles.childProContainer}>
                  <p>{item.title}</p>
                  <div className={styles.rating}>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <p>{item.price}</p>
                </div>
              </div>))}
            </div>
          </div>
        </div>
        <div className={styles.shopContainer}>
          <div className={styles.shopContainerNav}>
            <div className={styles.ChildContainerOfNav}>
              <p className={styles.slashMen}>Home/Men</p>
              <p className={styles.WomenNav}>Women</p>
              <p className={styles.showing}>
                Showing <span>1</span>-<span>12</span> of 31 Results
              </p>
            </div>
            <select
              className={styles.dropdown}
              onChange={handleSort}
              name="Sort"
              id="Sort"
            >
              <option value="Sorting">Default Sorting</option>
              <option value="Popularity">Sort By Popularity</option>
              <option value="Rating">Sort By Average Rating</option>
              <option value="Latest">Sort by Latest</option>
              <option value="PriceLH">Sort By Price: Low to High</option>
              <option value="PriceHL">Sort By Price: High to Low</option>
            </select>
          </div>
          <div className={styles.containerHEhe}>
            {shopCards.map((shopCard) => (
              <div key={shopCard._id} className={styles.shopCard}>
                <MdAddShoppingCart
                  className={styles.carticon}
                  style={style[shopCard._id]}
                />
                <img src={shopCard.img} className={styles.img} alt="" />
                <div className={styles.details}>
                  <h5>{shopCard.title}</h5>
                  <p className={styles.men}>{shopCard.category}</p>
                  <p className={styles.price}>
                    <del>{shopCard.cuttedPrice}</del>
                    {shopCard.price}
                  </p>
                  <div className={styles.rating}>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.buttons}>
            <button className={styles.one}>1</button>
            <button>2</button>
            <button>3</button>
            <button>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Women;
