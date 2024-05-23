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
  const dropdownRef = useRef(null);
  const { product } = useSelector((store) => store.sellerEverything);
  const { min, max } = useSelector((store) => store.filterEverything);
  const { ProductEvery, style, resultInitial, totalResult, resultEnd } =
    useSelector((store) => store.productEveryThing);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const [display, setDisplay] = useState({
    display: "none",
  });
  const MinRangeInput = useRef(null);
  const MaxRangeInput = useRef(null);
  const searchInput = useRef(null);
  const handleOnMouseOver = (id) => {
    dispatch(productEverthingAction.stylingOver({ cardId: id }));
  };
  const handleSearch = () => {
    const input = searchInput.current.value;
    if (input.trim() !== "") {
      // Clear previous timer
      clearTimeout(searchTimer);

      // Set new timer
      searchTimer = setTimeout(async () => {
        try {
          const res = await axios.get(
            `http://localhost:8080/everything?products=${input}`
          );
          console.log(res.data);
        } catch (error) {
          console.error("Error:", error);
        }
      }, 2000);
    }
  };

  let searchTimer;

  const handleOnMouseLeave = (id) => {
    dispatch(productEverthingAction.stylingLeave({ cardId: id }));
  };

  const ResultsEvery = async () => {
    const res = await axios.get(`http://localhost:8080/everything`);
    const { totalCount } = res.data;
    dispatch(productEverthingAction.totalResult({ total: totalCount }));
  };
  const ResultsEveryFilter = async () => {
    const queryParams = new URLSearchParams({
      page: currentPage.toString(),
      min: min.toString(),
      max: max.toString(),
      sort: sortOption,
    });

    const res = await axios.get(
      `http://localhost:8080/everything/filteredProducts?${queryParams.toString()}`
    );
    const { totalCount } = res.data;
    dispatch(productEverthingAction.totalResult({ total: totalCount }));
  };

  const getProductEverything = async () => {
    const queryParams = new URLSearchParams({
      page: currentPage.toString(),
      sort: sortOption,
    });
    const res = await axios.get(
      `http://localhost:8080/everything?${queryParams.toString()}`
    );
    const { products, totalCount } = res.data;
    const calculatedTotalPages = Math.ceil(totalCount / 12);
    setTotalPages(calculatedTotalPages);
    const startIndex = (currentPage - 1) * 12 + 1;
    const endIndex = startIndex + products.length - 1;
    dispatch(productEverthingAction.everythingData({ data: products }));
    dispatch(
      productEverthingAction.resultChange({
        resultInitial: startIndex,
        resultEnd: endIndex,
      })
    );
  };

  const getFilteredProducts = async () => {
    const queryParams = new URLSearchParams({
      page: currentPage.toString(),
      min: min.toString(),
      max: max.toString(),
      sort: sortOption,
    });

    const res = await axios.get(
      `http://localhost:8080/everything/filteredProducts?${queryParams.toString()}`
    );
    const { products, totalCount } = res.data;
    const calculatedTotalPages = Math.ceil(totalCount / 12);
    setTotalPages(calculatedTotalPages);
    const startIndex = (currentPage - 1) * 12 + 1;
    const endIndex = startIndex + products.length - 1;
    dispatch(productEverthingAction.everythingData({ data: products }));
    dispatch(
      productEverthingAction.resultChange({
        resultInitial: startIndex,
        resultEnd: endIndex,
      })
    );
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
    if (isFilterActive) {
      getFilteredProducts();
      ResultsEveryFilter();
    } else {
      getProductEverything();
      ResultsEvery();
    }
  }, [currentPage, isFilterActive, sortOption, totalPages]);

  const handleSort = (event) => {
    const selectedSortOption = event.target.value;
    setSortOption(selectedSortOption);
    setCurrentPage(1);
  };

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
    dispatch(productEverthingAction.resultChange({ page: page }));
  };

  const handleFilterRemove = () => {
    setDisplay({
      display: "none",
    });
    setCurrentPage(1);
    setIsFilterActive(false);
    setSortOption("");
    MinRangeInput.current.value = 20;
    MaxRangeInput.current.value = 0;
    dispatch(filterEverythingActions.minFilter({ minRange: 20 }));
    dispatch(filterEverythingActions.maxFilter({ maxRange: 240 }));

    getProductEverything();
    if (dropdownRef.current) {
      dropdownRef.current.value = "";
    }
  };

  const handleFilter = () => {
    setCurrentPage(1);
    setIsFilterActive(true);
    getFilteredProducts();
    setDisplay({
      display: "unset",
    });
  };

  return (
    <main className={styles.parentConatiner}>
      <div className={styles.container}>
        <div className={styles.filter}>
          <div className={styles.searchBar}>
            <input
              placeholder="Search Products.."
              className={styles.searchInput}
              onChange={() => {
                setTimeout(() => {
                  handleSearch();
                }, 2000);
              }}
              ref={searchInput}
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
              <button onClick={handleFilter}>FILTER</button>
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
            <button
              onClick={handleFilterRemove}
              style={display}
              className={styles.RemoveFilter}
            >
              Remove Filter
            </button>
            <div className={styles.category}>
              <h3>Categories</h3>
              <p>
                <Link className={styles.link} to="/men">
                  Men <span>(20)</span>
                </Link>
              </p>
              <p>
                <Link className={styles.link} to="/women">
                  Women <span>(20)</span>
                </Link>
              </p>
              <p>
                <Link className={styles.link} to="/accessories">
                  Accessories <span>(20)</span>
                </Link>
              </p>
            </div>
            <div className={styles.sellerContainer}>
              <h3>Our Best Sellers</h3>
              {product.map((item) => (
                <div key={item.id} className={styles.ProductContainer}>
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
                Showing <span>{resultInitial ? resultInitial : 1}</span>-
                <span>{resultEnd ? resultEnd : 12} of</span>{" "}
                {isFilterActive ? null : totalResult} Results
              </p>
            </div>
            <select
              className={styles.dropdown}
              onChange={handleSort}
              name="Sort"
              id="Sort"
              ref={dropdownRef}
            >
              <option value="">Default Sorting</option>
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
            {!isFilterActive
              ? [...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={
                        pageNumber === currentPage ? styles.active : ""
                      }
                    >
                      {pageNumber}
                    </button>
                  );
                })
              : [1, 2, 3, 4].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={
                        pageNumber === currentPage ? styles.active : ""
                      }
                    >
                      {pageNumber}
                    </button>
                  );
                })}
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
