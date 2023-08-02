import { setStep } from "../../../../slices/orderSlice";
import { setInfoStep1 } from "../../../../slices/customerSlice";

export const handleFirstNameChange = (
  event,
  setFirstName,
  setFirstNameError
) => {
  const inputValue = event.target.value;
  const isValid = /^[a-zA-Zа-яА-Я]+$/u.test(inputValue);

  if (event.target.value !== "" && isValid) {
    setFirstName(event.target.value);
    setFirstNameError(false);
  } else {
    setFirstNameError(true);
  }
};
export const handleLastNameChange = (event, setLastName, setLastNameError) => {
  const inputValue = event.target.value;
  const isValid = /^[a-zA-Zа-яА-Я]+$/u.test(inputValue);

  if (event.target.value !== "" && isValid) {
    setLastName(event.target.value);
    setLastNameError(false);
  } else {
    setLastNameError(true);
  }
};
export const handleMiddleNameChange = (
  event,
  setMiddleName,
  setMiddleNameError
) => {
  const inputValue = event.target.value;
  const isValid = /^[a-zA-Zа-яА-Я]+$/u.test(inputValue);

  if (event.target.value !== "" && isValid) {
    setMiddleName(event.target.value);
    setMiddleNameError(false);
  } else {
    setMiddleNameError(true);
  }
};
export const handleNumberPassportChange = (
  event,
  setNumberPassport,
  setNumberPassportError
) => {
  const inputValue = event.target.value.replace(/\D/g, "");
  const series = inputValue.slice(0, 4);
  const number = inputValue.slice(4, 10);

  let formattedValue = `${series} ${number}`;

  if (inputValue.length > 11) {
    formattedValue = formattedValue.slice(0, 11);
  }

  if (event.target.value !== "") {
    setNumberPassport(formattedValue);
    setNumberPassportError(false);
  } else {
    setNumberPassportError(true);
  }
};
export const handleYearPassportChange = (
  event,
  setYearPassport,
  setYearPassportError
) => {
  const inputValue = event.target.value;
  let formattedValue = inputValue
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d{2})(\d{4})/, "$1.$2.$3");

  if (formattedValue.length <= 10 || inputValue === "") {
    setYearPassport(formattedValue);
    setYearPassportError(false);
  } else {
    setYearPassportError(true);
  }
};
export const handleIssuedPassportChange = (
  event,
  setIssuedPassport,
  setIssuedPassportError
) => {
  if (event.target.value !== "") {
    setIssuedPassport(event.target.value);
    setIssuedPassportError(false);
  } else {
    setIssuedPassportError(true);
  }
};
export const handleButtonClick = (
  dispatch,
  firstName,
  lastName,
  middleName,
  numberPassport,
  yearPassport,
  issuedPassport,
  phoneNumber,
  firstNameError,
  lastNameError,
  middleNameError,
  numberPassportError,
  yearPassportError,
  issuedPassportError,
  phoneNumberError,
  setFirstNameError,
  setLastNameError,
  setMiddleNameError,
  setNumberPassportError,
  setYearPassportError,
  setIssuedPassportError,
  setPhoneNumberError
) => {
  if (
    firstNameError === false &&
    lastNameError === false &&
    middleNameError === false &&
    numberPassportError === false &&
    yearPassportError === false &&
    issuedPassportError === false &&
    phoneNumberError === false &&
    firstName !== "" &&
    lastName !== "" &&
    middleName !== "" &&
    numberPassport !== "" &&
    yearPassport !== "" &&
    issuedPassport !== "" &&
    phoneNumber !== ""
  ) {
    dispatch(
      setInfoStep1({
        name: `${firstName} ${lastName} ${middleName}`,
        phone: phoneNumber,
        passport: `${numberPassport} ${yearPassport} ${issuedPassport}`,
      })
    );
    dispatch(setStep(2));
  } else {
    alert("Заполните все поля!");
    if (firstName === "") {
      setFirstNameError(true);
    } else setFirstNameError(false);
    if (lastName === "") {
      setLastNameError(true);
    } else setLastNameError(false);
    if (middleName === "") {
      setMiddleNameError(true);
    } else setMiddleNameError(false);
    if (numberPassport === "") {
      setNumberPassportError(true);
    } else setNumberPassportError(false);
    if (yearPassport === "") {
      setYearPassportError(true);
    } else setYearPassportError(false);
    if (issuedPassport === "") {
      setIssuedPassportError(true);
    } else setIssuedPassportError(false);
    if (phoneNumber === "") {
      setPhoneNumberError(true);
    } else setPhoneNumberError(false);
  }
};
export const handleInputChange = (
  event,
  setPhoneNumber,
  setPhoneNumberError
) => {
  const value = event.target.value;
  setPhoneNumber(value);

  const validPhoneNumber = /^([0-9]{11})?$/.test(value);
  setPhoneNumberError(!validPhoneNumber);
};
