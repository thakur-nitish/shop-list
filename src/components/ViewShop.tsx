import React from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { removeShop } from "../features/todoSlice";
import { useSelector } from "react-redux";
// import Dropdown from "react-bootstrap/Dropdown";
// import customStyles1 from "./style.js";
import EditShop from "./EditShop";
import Select from "react-select";
const options1 = [
  {
    label: `Category`,
    options: [
      {
        label: "Butcher",
        value: "Butcher",
        color: "red",
      },
      {
        label: "Grocery",
        value: "Grocery",
        color: "blue",
      },
      {
        label: "Chemist",
        value: "Chemist",
        color: "green",
      },
    ],
  },
  {
    label: "Area",
    options: [
      {
        label: "Thane",
        value: "Thane",
        color: "brown",
      },
      {
        label: "Pune",
        value: "Pune",
        color: "orange",
      },
      {
        label: "Mumbai",
        value: "Mumbai",
        color: "purple",
      },
    ],
  },
];
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
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todok);

  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen1, setIsOpen1] = React.useState(false);

  const [shopDetail, setShopDetail] = React.useState({
    shopName: "",
    area: "",
    category: "",
    oDate: "",
    cDate: "",
  });

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen1(false);
  }
  function openModal1() {
    setIsOpen1(true);
  }

  function afterOpenModal1() {
    subtitle.style.color = "#f00";
  }

  function closeModal1() {
    setIsOpen1(false);
  }
  function closeModalADelete() {
    console.log(shopDetail.shopName);

    dispatch(removeShop(shopDetail.shopName));
    setIsOpen(false);
  }
  function filterData(arr: any, toFilter: any) {
    let newArr = [];

    newArr = arr.filter((value: any) => {
      return value.area === toFilter;
    });
    setFilteredData(newArr);
  }

  const [selectedOption2, setSelectedOption2] = React.useState(null);
  const [filteredData, setFilteredData] = React.useState(todos);
  const handleChangeSelect = (selectedOption2: any) => {
    setSelectedOption2(selectedOption2);
    filterData(todos, selectedOption2.value);
  };
  React.useEffect(() => {
    setFilteredData(todos);
    setSelectedOption2(null);
  }, [todos]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <u>Shop List</u>
      </h1>
      <div
        style={{
          width: "15%",
          marginBottom: "60px",
          marginLeft: "60px",
        }}
      >
        {todos.length === 0 ? (
          ""
        ) : (
          <Select
            placeholder="Filter"
            value={selectedOption2}
            onChange={handleChangeSelect}
            options={options1}
          />
        )}
      </div>

      <div className="card-deck" style={{ width: "1200px", margin: "auto" }}>
        {todos.length === 0 ? <h1>No item to display</h1> : ""}
        {filteredData.map((data: any) => {
          return (
            <div
              key={data.uuid}
              className="card"
              style={{
                width: "300px",
                float: "left",
                marginRight: "30px",
                marginBottom: "60px",
              }}
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
                  <button
                    type="button"
                    onClick={() => {
                      setShopDetail(data);
                      openModal1();
                    }}
                    className="btn btn-success me-2"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      setShopDetail(data);
                      openModal();
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* starting code for Modal edit */}
      <div>
        <Modal
          isOpen={modalIsOpen1}
          onAfterOpen={afterOpenModal1}
          onRequestClose={closeModal1}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            Hello Please edit your form
          </h2>
          <EditShop
            value={{
              nam: shopDetail.shopName,
              area: shopDetail.area,
              category: shopDetail.category,
              oDate: shopDetail.oDate,
              cDate: shopDetail.cDate,
            }}
            closeModal={closeModal1}
          />
        </Modal>
      </div>
      {/* Ending code for Modal edit */}
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
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="btn btn-success me-5"
          >
            close
          </button>
          <button
            onClick={() => {
              closeModalADelete();
            }}
            className="btn btn-danger right"
          >
            Yes
          </button>
        </Modal>
      </div>
    </>
  );
}
