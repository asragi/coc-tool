import { connect } from '../../utils/connect';
import { ProfileInputPresenter } from './presenter';
import { ProfileInputView } from './view';

export const ProfileInput = connect(ProfileInputPresenter, ProfileInputView);
