import { Version } from "../../types";
import { ParameterMatrix } from "../ParameterMatrix";

export interface ParameterContentViewProps {
  version: Version;
}

export const ParameterContentView = ({version}: ParameterContentViewProps) => {
  return (
    <>
      <ParameterMatrix version={version}/>
      <ParameterMatrix version={version}/>
    </>
  );
};
