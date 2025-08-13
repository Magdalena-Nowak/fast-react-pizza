import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  getCurrentQuantity,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ id }) {
  // TODO: Implement functionality to update item quantity in cart
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantity(id));

  function handleDecreaseItemQuantity() {
    dispatch(decreaseItemQuantity(id));
  }

  function handleIncreaseItemQuantity() {
    dispatch(increaseItemQuantity(id));
  }

  return (
    <div className="mx-2">
      <Button type="rounded" onClick={handleDecreaseItemQuantity}>
        -
      </Button>
      <span className="w-8 px-1.5">{currentQuantity}</span>
      <Button type="rounded" onClick={handleIncreaseItemQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
