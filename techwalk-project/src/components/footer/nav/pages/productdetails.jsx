import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import Products from "./products.json";
import "swiper/css";
import "swiper/css/effect-fade";

export default function Productdetails() {
  const { id } = useParams();
  const product = Products.find((p) => String(p.id) === String(id));
  const [Mainimg, setMainimg] = useState("");
  const [img, setimg] = useState([]);
  const [qty, setqty] = useState(1);

  useEffect(() => {
    if (product) {
      setMainimg(product.image);
      setimg([product.image, product.secondimage].filter(Boolean));
      setqty(1);
    }
  }, [product]);
  if (!product) return null;

  return (
    <>
      <ol className="section-banner py-3 position-relative">
        <li className="position-relative">
          <Link to="/">Home</Link>
        </li>
        <li className="position-relative active">
          <a href=""></a>
        </li>
        <li className="position-relative actives">
          <a href="">{product.productname}</a>
        </li>
      </ol>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex flex-column-reverse flex-md-row mb-4">
              <div className="d-flex flex-column me-3 thumbnail-images">
                {img.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    onClick={() => setMainimg(img)}
                    className={`img-thumbnail ${Mainimg === img ? "border-dark" : ""}`}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
              <img
                src={Mainimg}
                alt=""
                className="img-fluid"
                style={{ width: "555px" }}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <h4 className="fw-bold text-warning">${product.price}</h4>
            <h2 className="mb-4 fw-semibold">{product.productname}</h2>
            <p className="text-muted">{product.description}</p>
            <p className="fw-semibold mb-1">Quantity</p>
            <div className="d-flex align-items-center gap-3 qty">
              <div
                className="d-flex align-items-center qty-box mt-4"
                style={{ maxWidth: "200px" }}
              >
                <button
                  className="btn btn-count border"
                  onClick={() => setqty((q) => Math.max(1, q - 1))}
                >-</button>
                <input
                  type="text"
                  className="form-control text-center mx-2"
                  value={qty}
                  readOnly
                />
                 <button
                  className="btn btn-count border"
                  onClick={() => setqty((q) => Math.max(1, q + 1))}
                >+</button>
              </div>
            </div>
            <div className="py-5">
                <button className=" btn btn-dark w-25 fw-bold p-2">Add to Cart</button>
                <button className="ms-4 btn btn-warning w-50 text-white fw-bold p-2">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 m-5">
        <h1>You Might also like this</h1>
          <Swiper
                        slidesPerView={6}
                        spaceBetween={50}
                        modules={[Navigation]}
                        navigation={{ nextEl: ".product-swiper-next", prevEl: ".product-swiper-prev" }}
                        breakpoints={{
                            1399: { slidesPerView: 6 },
                            1199: { slidesPerView: 5 },
                            991: { slidesPerView: 4 },
                            767: { slidesPerView: 3.5 },
                            0: { slidesPerView: 3 },
                        }}
                        className="mt-5 swiper position-relative"
                    >
                        {Products.filter(product => product.id >=1 && product.id<=14).map(product=>(
                            <SwiperSlide key={product.id}>
                                  <div className="product-item text-center position-relative">
                                    <div className="product-image w-100 position-relative overflow-hidden">
                                        <img src={product.image} alt="" className="img-fluid"style={{height:"170px", width:"280px"}} />
                                        <img src={product.secondimage} className="img-fluid" style={{height:"170px", width:"280px"}} alt="" />
                                    </div>
                                    <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
                                        <div className="product-details py-2">
                                            <h5 className="" style={{fontSize:"14px"}}>{product.productname}</h5>
                                            <h6 className="text-warning">${product.price}</h6>
                                        </div>
                                    </Link>    
                                    <div className="d-flex align-items-center justify-content-between">
                                        <button className="btn btn-outline-dark fs-5"><i class="fa-solid fa-heart"></i></button>
                                        <button className="btn btn-outline-dark fs-5"><i class="fa-solid fa-bag-shopping"></i></button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
      </div>
    </>
  );
}
