import { connect } from "../../utils/connect";
import { HeaderPresenter } from "./presenter";
import { HeaderView } from "./view";

export const Header = connect(HeaderPresenter, HeaderView);
