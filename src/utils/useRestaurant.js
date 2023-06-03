import { useState, useEffect } from "react";
import { FECTH_MENU_URL } from "../contants";

const useRestaurant =(resId) => {

const [restaurant, setRestauraunt] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      FECTH_MENU_URL +
        resId
    );
    const json = await data.json();
    console.log(json.data);
    setRestauraunt(json.data);
  }

  return restaurant;

}

export default useRestaurant;