import { connect } from '../../utils/connect';
import { FaceImagePresenter } from './presenter';
import { FaceImageView } from './view';

export const FaceImage = connect(FaceImagePresenter, FaceImageView);
