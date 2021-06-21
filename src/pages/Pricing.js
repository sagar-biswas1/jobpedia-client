import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img1 from "../images/img1.svg";
import img2 from "../images/img2.svg";
import img3 from "../images/img3.svg";
function Pricing() {
  // const packages = [
  //   {id:'p1',
  //     name: "Premium",
  //     img: img1,
  //     jobWillBeDisplayed: "30 hours per month",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolores, fugit sunt voluptatem dolorem nisi saepe cum corrupti. Nostrum, perspiciatis!",
  //       price:70
  //   },
  //   {id:'p2',
  //     name: "Standard",
  //     img: img2,
  //     jobWillBeDisplayed: "20 hours per month",
  //     description:
  //       " Animi numquam a rem autem ipsum beatae enim aspernatur facilis nisi alias. Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //       price: 50
  //   },
  //   {id:'p3',
  //     name: "Basic",
  //     img: img3,
  //     jobWillBeDisplayed: "10 hours per month",
  //     description:
  //       " Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam .",
  //       price:30
  //   },
  // ];

  const packages = useSelector((state) => state.allPackages.packages);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 container m-auto">
      {packages.map((p) => (
        <PriceCard id={p.id} data={p} />
      ))}
    </div>
  );
}

const PriceCard = ({ data }) => {
  const { name, img, jobWillBeDisplayed, description, price } = data;

  return (
    <>
      <div className="col">
        <div className="card purple-card h-100">
          <img
            src={img}
            className="card-img-top p-2"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <h6>{jobWillBeDisplayed}</h6>
            <p className="card-text">{description}</p>
            <p>Price: $ {price}/ month</p>
          </div>
          <div className="card-footer text-center">
            <Link
              to={`/signup/${name}`}
              className="price-btn text-decoration-none"
            >
              <i className="bi bi-cart4"></i> Select plan
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
