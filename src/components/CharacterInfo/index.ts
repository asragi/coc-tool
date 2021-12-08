import { connect } from "../../utils/connect";
import { CharacterInfoPresenter } from "./presenter";
import { CharacterInfoView } from "./view";

export const CharacterInfo = connect(CharacterInfoPresenter, CharacterInfoView);
