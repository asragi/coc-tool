import { fireEvent, render, screen } from '@testing-library/react';
import { CustomButtonView } from './view';

describe('CustomButton', () => {
  test('render and fire', () => {
    const text = 'ButtonText';
    const className = 'button-class';
    const onClick = jest.fn();
    const result = render(
      <CustomButtonView text={text} className={className} onClick={onClick} />
    );
    const button = result.queryByText(text);
    expect(button).toBeTruthy();
    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(button!);
    expect(onClick).toHaveBeenCalled();
  });
});
