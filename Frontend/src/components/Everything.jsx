import { useDispatch, useSelector } from "react-redux";
import { BiRupee } from "react-icons/bi";
import styles from "./Everything.module.css";
import { GrNext } from "react-icons/gr";
import { MdAddShoppingCart } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { productEverthingAction } from "../store/productEverything";
import { cartAction } from "../store/cart";
import { filterEverythingActions } from "../store/filterEverything";
const Everything = () => {
  const { product } = useSelector((store) => store.sellerEverything);
  const { min, max } = useSelector((store) => store.filterEverything);
  const { ProductEvery, style ,resultInitial,resultEnd} = useSelector(
    (store) => store.productEveryThing
  );
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const MinRangeInput = useRef(null);
  const MaxRangeInput = useRef(null);
  const handleOnMouseOver = (id) => {
    dispatch(productEverthingAction.stylingOver({ cardId: id }));
  };

  const handleOnMouseLeave = (id) => {
    dispatch(productEverthingAction.stylingLeave({ cardId: id }));
  };

  const getProductEverything = async () => {
    const res = await axios.get(
      `http://localhost:8080/everything?page=${currentPage}`
    );
    console.log(res.data);
    dispatch(productEverthingAction.everythingData({ data: res.data }));
  };
    const getFilteredProducts = async () => {
    const res = await axios.get(
      `http://localhost:8080/everything/filteredProducts?page=${currentPage}&min=${min}&max=${max}`
    );
    console.log(res.data);
    dispatch(productEverthingAction.everythingData({ data: res.data }));
  };
  const cartAdd = async (id) => {
    const ExistingItem = await axios.get(
      `http://localhost:8080/cartItem/${id}`
    );
    if (ExistingItem.data) {
      alert("already in cart");
      return;
    }

    const res = await axios.get(`http://localhost:8080/everything/${id}`);
    const postData = {
      _id: res.data._id,
      img: res.data.img,
      title: res.data.title,
      quantity: 1,
      cuttedPrice: res.data.cuttedPrice,
      price: res.data.price,
    };

    const response = await axios.post(
      `http://localhost:8080/cartItem/`,
      postData
    );
    dispatch(cartAction.addCartItem({ data: postData }));
  };

  useEffect(() => {
    getProductEverything();
  }, [currentPage]);

  const handleSort = () => {};
  const handleMinRangeChange = () => {
    const newMinRange = MinRangeInput.current.value;
    if (newMinRange < max) {
      dispatch(filterEverythingActions.minFilter({ minRange: newMinRange }));
    } else {
      MinRangeInput.current.value = max;
    }
  };

  const handleMaxRangeChange = () => {
    const maxValue = 240;
    const newMaxRange = maxValue - MaxRangeInput.current.value;
    if (newMaxRange > min) {
      dispatch(filterEverythingActions.maxFilter({ maxRange: newMaxRange }));
    } else {
      MaxRangeInput.current.value = maxValue - min;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(productEverthingAction.resultChange({page:page}));
  };

  const totalPages = 3;

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
            <span className={styles.min}>
              Min:
              <BiRupee className={styles.rupeeSymbol} />
              {min}
            </span>
            <input
              type="range"
              min="20"
              max="240"
              defaultValue="20"
              className={styles.range1}
              onChange={handleMinRangeChange}
              ref={MinRangeInput}
            />
            <span className={styles.max}>
              Max:
              <BiRupee className={styles.rupeeSymbol} />
              {max}
            </span>
            <input
              type="range"
              min="20"
              max="240"
              defaultValue="20"
              className={styles.range2}
              onChange={handleMaxRangeChange}
              ref={MaxRangeInput}
            />

            <div className={styles.buttonFiltercontainer}>
              <button  onClick={getFilteredProducts}>FILTER</button>
              <p>
                Price:{" "}
                <span>
                  <BiRupee className={styles.rupeeSymbol} />
                  {min}
                </span>
                 -
                <span>
                  <BiRupee className={styles.rupeeSymbol} />
                  {max}
                </span>
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
              {product.map((item) => (
                <div key={product.id} className={styles.ProductContainer}>
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
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.shopContainer}>
          <div className={styles.shopContainerNav}>
            <div className={styles.ChildContainerOfNav}>
              <p className={styles.slashHome}>Home/Products</p>
              <p className={styles.showing}>
                Showing <span>{resultInitial? resultInitial:1}</span>-<span>{resultEnd?resultEnd:12}</span> of 31 Results
              </p>
            </div>
            <select
              className={styles.dropdown}
              onChange={handleSort}
              name="Sort"
              id="Sort"
            >
              <option value="Sorting">Default Sorting</option>
              <option value="PriceLH">Sort By Price: Low to High</option>
              <option value="PriceHL">Sort By Price: High to Low</option>
            </select>
          </div>
          <div className={styles.containerHEhe}>
            {ProductEvery.map((product) => (
              <div
                key={product._id}
                className={styles.shopCard}
                onMouseOver={() => handleOnMouseOver(product._id)}
                onMouseLeave={() => handleOnMouseLeave(product._id)}
              >
                <MdAddShoppingCart
                  className={styles.carticon}
                  onClick={() => cartAdd(product._id)}
                  style={style[product._id]}
                />
                <img src={product.img} className={styles.img} alt="" />
                <div className={styles.details}>
                  <h5>{product.title}</h5>
                  <p className={styles.men}>{product.category}</p>
                  <p className={styles.price}>
                    <del>{product.cuttedPrice}</del>
                    {product.price}
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
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={page === currentPage ? styles.active : ""}
              >
                {page}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Everything;
