import { Version } from '../../types';
import { Presenter } from '../../utils/connect';
import { ParameterContentViewProps } from './view';

interface Props {
  version: Version;
}

export const ParameterContentPresenter: Presenter<
  Props,
  ParameterContentViewProps
> = ({ version }: Props) => {
  return { version };
};
