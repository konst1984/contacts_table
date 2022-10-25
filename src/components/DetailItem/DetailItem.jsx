import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const DetailItem = () => {
  const {
    detailItem: {
      id,
      firstName,
      lastName,
      email,
      phone,
      address: { streetAddress, zip, city, state },
      description,
    },
  } = useContext(AppContext);

  return (
    <div className="details">
      <p>id: {id}</p>
      <p>firstName: {firstName}</p>
      <p>lastName: {lastName}</p>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <p>streetAddress: {streetAddress}</p>
      <p>city: {city}</p>
      <p>state: {state}</p>
      <p>zip: {zip}</p>
      <p>description: {description}</p>
    </div>
  );
};
export default DetailItem;
