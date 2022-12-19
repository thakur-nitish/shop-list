import React, { Dispatch, SetStateAction } from "react";
import Modal from "react-modal";
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
interface PropsType {
  fun: Dispatch<SetStateAction<AppContextInterface[]>>;
}
interface AppContextInterface {
  shopName: string;
  area: string;
  category: string;
  oDate: string;
  cDate: string;
}
export default function AddShop(props: PropsType) {
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
    setIsOpen(false);
  }
  const [formState, setFormState] = React.useState({
    area: "",
    category: "",
  });
  const [shopName, setShopName] = React.useState("");
  const [oDate, setODate] = React.useState("");
  const [cDate, setCDate] = React.useState("");

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
    e.preventDefault();
    // openModal();
    if (shopName === "") {
      setModalTextAColor({
        ...modalTextAColor,
        text: "Please fill all the fields!",
        color: "red",
      });
      openModal();
    } else {
      setModalTextAColor({
        ...modalTextAColor,
        text: "Shop has been added successfully!",
        color: "green",
      });
      openModal();
      props.fun((prev) => [
        ...prev,
        {
          shopName: shopName,
          area: formState.area,
          category: formState.category,
          oDate: oDate,
          cDate: cDate,
        },
      ]);
      setShopName("");
      setODate("");
      setCDate("");
      setFormState({ area: "", category: "" });
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
        <u>Add Shops</u>
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
            type="date"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Opening date"
            required
            value={oDate}
            onChange={(e: any) => setODate(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "25px" }}>
          <label htmlFor="exampleInputPassword1">Closing Date</label>
          <input
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
      <p>Value1:{formState.area}</p>
      <p>Value2:{formState.category}</p>
      <p>Value3:{shopName}</p>
      <p>Value4:{oDate}</p>
      <p>vlaue5:{cDate}</p>
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
          <p style={{ color: modalTextAColor.color }}>{modalTextAColor.text}</p>
          <button onClick={closeModal} className="btn btn-success me-5">
            close
          </button>
        </Modal>
      </div>
    </>
  );
}
