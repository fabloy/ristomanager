import reducer from "./StoreUser";
import { configureStore } from "@reduxjs/toolkit";

const storeUser = configureStore({reducer})
export default storeUser