
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PaymentModal from "../../components/ProcessPayment/PaymentModal";
import { setUser } from "../../redux/actions/userLogin";
import { googleSignIn } from "./loginMethods";

function Signup() {
  let { deal } = useParams();
  const [isdDisplaySignupBtn, setIsDisplaySignupBtn] = React.useState(true);
  const dispatch = useDispatch();
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      dispatch(setUser({ ...res, role: "employer" }));

      setIsDisplaySignupBtn(false);
    });
  };

  return (
    <div>
      <h1>{deal}</h1>

      <div className="d-flex flex-column flex-sm-row">
        <PackageCard deal={deal} />
        <div className="text-center m-3" style={{ flex: 2 }}>
          {isdDisplaySignupBtn ? (
            <div className="m-auto mt-3" style={{ maxWidth: 450 }}>
              <button
                className="btn btn-outline-primary"
                style={{
                  width: "100%",
                  border: "1px solid",
                  padding: 5,
                  borderRadius: 999,
                  margin: "auto",
                }}
                onClick={handleGoogleSignIn}
              >
                <img
                  src="https://img-authors.flaticon.com/google.jpg"
                  alt=""
                  className="mx-3"
                  style={{
                    maxWidth: 30,
                    borderRadius: "50%",
                  }}
                />
                Continue with google
              </button>
            </div>
          ) : (
            <PaymentInfo deal={deal} />
          )}
        </div>
      </div>
    </div>
  );
}

const PaymentInfo = ({ deal }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  const packages = useSelector((state) => state.allPackages.packages);

  const { name, price } = packages.find((p) => p.name === deal);
  const userData = useSelector((state) => state.userData.userInfo);

  const [orderDetails, setOrderDetails] = React.useState({
    name: userData.name,
    email: userData.email,

    serviceType: name,
    role: "employer",
    price: price,
    date: `${new Date().toDateString(
      "dd/mm"
    )} , ${new Date().toLocaleTimeString()}`,
    address: "",
    mobileNumber: "",
  });

  const handleInputChange = (e) => {
    const newOrderDetails = { ...orderDetails };
    newOrderDetails[e.target.name] = e.target.value;
    setOrderDetails(newOrderDetails);
  };

  console.log("here is your order details", orderDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onBlur={handleInputChange}
            required
            placeholder={userData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Your name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
            name="name"
            onBlur={handleInputChange}
            placeholder={userData.name}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputAddress" className="form-label">
            Your Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            aria-describedby="emailHelp"
            name="address"
            onBlur={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputMobileNumber" className="form-label">
            Your Mobile Number
          </label>
          <input
            type="number"
            className="form-control"
            id="inputMobileNumber"
            aria-describedby="emailHelp"
            name="mobileNumber"
            onBlur={handleInputChange}
            required
          />

          <input type="submit" className="btn btn-primary m-2" />
        </div>
      </form>
      {modalIsOpen && (
        <PaymentModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          orderDetails={orderDetails}
        />
      )}
    </>
  );
};

const PackageCard = ({ deal }) => {
  const packages = useSelector((state) => state.allPackages.packages);

  const { name, description, price } = packages.find((p) => p.name === deal);
  return (
    <div className="col m-2">
      <div className="card green-card h-100">
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <h6>Price :{price} </h6>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
