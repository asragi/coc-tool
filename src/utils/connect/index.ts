export type Presenter<P, Q> = (props: P) => Q | undefined;

export function connect<P, Q>(
  presenter: Presenter<P, Q>,
  view: (props: Q) => JSX.Element
): (props: P) => JSX.Element | null {
  const component = (props: P) => {
    const propsForView = presenter(props);
    if (propsForView === undefined) {
      return null;
    }

    return view(propsForView);
  };

  return component;
}
