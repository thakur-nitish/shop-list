import React from "react";
import Modal from "react-modal";
import { useContext } from "react";
import { AppContext } from "../App";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ViewShop() {
  const appContext = useContext(AppContext);

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <u>Shop List</u>
      </h1>
      <div style={{ marginBottom: "80px", marginLeft: "10%" }}>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            Filter
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <input
              className="form-control"
              id="myInput"
              type="text"
              placeholder="Search.."
            />
            <li>
              <a href="/#">HTML</a>
            </li>
            <li>
              <a href="/#">CSS</a>
            </li>
            <li>
              <a href="/#">JavaScript</a>
            </li>
            <li>
              <a href="/#">jQuery</a>
            </li>
            <li>
              <a href="/#">Bootstrap</a>
            </li>
            <li>
              <a href="/#">Angular</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card-deck" style={{ width: "1200px", margin: "auto" }}>
        {appContext.map((data) => {
          return (
            <div
              key={data.area}
              className="card"
              style={{ width: "300px", float: "left", marginRight: "30px" }}
            >
              <img
                className="card-img-top"
                src="www.google.com"
                alt="Card  cap"
              />
              <div className="card-body">
                <h5 className="card-title">Shop Name: {data.shopName}</h5>
                <p className="card-text">Area : {data.area}</p>
                <p className="card-text">Category : {data.category}</p>
                <p className="card-text">Opening Date : {data.oDate}</p>
                <p className="card-text">Closing Date : {data.cDate}</p>
              </div>
              <div className="card-footer">
                <div style={{ marginLeft: "20%" }}>
                  <button type="button" className="btn btn-success me-2">
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={openModal}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Modal code starts from here only. */}
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <p>Are you sure want to delete the Shop?</p>
          <button onClick={closeModal} className="btn btn-success me-5">
            close
          </button>
          <button onClick={closeModal} className="btn btn-danger right">
            Yes
          </button>
        </Modal>
      </div>
    </>
  );
}
