import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { editShop } from "../features/todoSlice";
import Modal from "react-modal";
import uuid from "react-uuid";
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
// interface PropsType {
//   fun: Dispatch<SetStateAction<AppContextInterface[]>>;
// }
export interface AppContextInterface {
  shopName: string;
  area: string;
  category: string;
  oDate: string;
  cDate: string;
}

export default function EditShop(props: any) {
  const name: string = props.value.nam;
  const dispatch = useDispatch();

  const todos = useSelector((state: any) => state.todok);

  const [modalTextAColor, setModalTextAColor] = React.useState({
    text: "",
    color: "black",
  });
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    props.closeModal();
    setIsOpen(false);
  }
  const [formState, setFormState] = React.useState({
    area: props.value.area,
    category: props.value.category,
  });
  const [shopName, setShopName] = React.useState(props.value.nam);
  const [oDate, setODate] = React.useState(props.value.oDate);
  const [cDate, setCDate] = React.useState(props.value.cDate);

  const changeHandler = (
    e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const formSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const areaK = formState.area;
    const cato = formState.category;
    e.preventDefault();
    // openModal();
    if (shopName === "" || formState.area === "" || formState.category === "") {
      setModalTextAColor({
        ...modalTextAColor,
        text: "Please fill all the fields!",
        color: "red",
      });
      openModal();
    } else {
      setModalTextAColor({
        ...modalTextAColor,
        text: "Shop has been edited successfully!",
        color: "green",
      });
      openModal();
      dispatch(
        editShop({
          toEditShopName: name,
          shopName,
          area: areaK,
          category: cato,
          oDate,
          cDate,
          uuid: uuid(),
        })
      );
    }
    // props.fun((prev) => [
    //   ...prev,
    //   {
    //     shopName: shopName,
    //     area: formState.area,
    //     category: formState.category,
    //     oDate: oDate,
    //     cDate: cDate,
    //   },
    // ]);
    // setShopName("");
    // setODate("");
    // setCDate("");
    // setFormState({ area: "", category: "" });
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        <u>Edit Shops</u>
      </h1>
      <form style={{ width: "500px", margin: "auto" }}>
        <div className="form-group" style={{ marginBottom: "25px" }}>
          <label htmlFor="exampleInputEmail1">Shop Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter shop name"
            required
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "25px" }}>
          <label htmlFor="exampleInputPassword1">Area</label>
          <select
            data-testid="select-area"
            className="form-select"
            aria-label=".form-select-sm example"
            required
            value={formState.area}
            name="area"
            onChange={(e) => changeHandler(e)}
          >
            <option value={""}>Open this select Area</option>
            <option value="Thane">Thane</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai Suburban">Mumbai Suburban</option>
          </select>
        </div>
        <div className="form-group" style={{ marginBottom: "25px" }}>
          <label htmlFor="exampleInputPassword1">Category</label>
          <select
            data-testid="select-category"
            className="form-select"
            aria-label=".form-select-sm example"
            required
            value={formState.category}
            name="category"
            onChange={(e) => changeHandler(e)}
          >
            <option value={""}>Open this select Category</option>
            <option value="Grocery">Grocery</option>
            <option value="Butcher">Butcher</option>
            <option value="Chemist">Chemist</option>
          </select>
        </div>
        <div className="form-group" style={{ marginBottom: "25px" }}>
          <label htmlFor="exampleInputPassword1">Opening Date</label>
          <input
            data-testid="opening-date"
            type="date"
            className="form-control"
            id="exampleIsrc/test/EditShop.test.tsxnputPassword1"
            placeholder="Opening date"
            required
            value={oDate}
            onChange={(e: any) => setODate(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "25px" }}>
          <label htmlFor="exampleInputPassword1">Closing Date</label>
          <input
            data-testid="closing-date"
            type="date"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Closing date"
            required
            name="cDate"
            value={cDate}
            onChange={(e: any) => {
              setCDate(e.target.value);
            }}
          />
        </div>
        <button
          data-testid="submit-button"
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%" }}
          onClick={(e) => {
            formSubmit(e);
          }}
        >
          Submit
        </button>
      </form>

      {/* Modal code starts from here only. */}
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <p style={{ color: modalTextAColor.color }}>{modalTextAColor.text}</p>
          <button onClick={closeModal} className="btn btn-success me-5">
            close
          </button>
        </Modal>
      </div>
    </>
  );
}
