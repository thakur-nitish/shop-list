const customStyles1 = {
  option: (styles, { data, isDisabled, isFocused, isSelected, value }) => {
    return {
      ...styles,
      color: data.color,
      fontFamily: value,
      border: "0px solid red",
      cursor: isDisabled ? "not-allowed" : "default",
      fontSize: "22px",
    };
  },
  group: () => ({
    border: "0px solid blue",
  }),
  groupHeading: () => ({
    fontWeight: "bold",
    color: "gray",
    fontFamily: "Courier New",
    marginLeft: "5px",
    marginTop: "5px",
    border: "0px solid red",
  }),
};

export default customStyles1;
