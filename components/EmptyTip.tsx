import config from '~config';

export default function EmptyTip() {
  return <div className="select-none text-center">{config.emptyTip}</div>;
}
