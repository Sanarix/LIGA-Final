import { BtnGroupParams } from './BtnGroup.types';

export function BtnGroup({ children, classComponent }: BtnGroupParams) {
  return <div className={classComponent}>{children}</div>;
}
