import { ReducerFunctions } from "../../redux/reducerInterfaces";

export type CartIconDispatchProps = Pick<ReducerFunctions, "toggleCartHidden">;

export interface CartIconProps extends CartIconDispatchProps {
  itemCount: number;
}
