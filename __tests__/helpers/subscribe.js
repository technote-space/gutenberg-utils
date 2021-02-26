/* eslint-disable no-magic-numbers */
import {dispatch} from '@wordpress/data';
import {addSubscribe} from '../../src/helpers';

describe('addSubscribe', () => {
  it('should call listener function', () => {
    const values   = [0, 1];
    let index      = 0;
    const selector = () => values[(index++) % values.length];
    const listener = jest.fn();
    addSubscribe(selector, listener);
    expect(listener).not.toBeCalled();

    dispatch('core/block-editor').updateSettings({
      disableCustomColors: false,
      disableCustomFontSizes: false,
      __experimentalFeatures: {},
    });
    expect(listener).toBeCalledWith(1);

    dispatch('core/block-editor').updateSettings({
      disableCustomColors: false,
      disableCustomFontSizes: false,
      __experimentalFeatures: {},
    });
    expect(listener).toBeCalledWith(0);
  });

  it('should call listener function once', () => {
    const selector = () => 1;
    const listener = jest.fn();
    addSubscribe(selector, listener, 10);
    expect(listener).not.toBeCalled();

    dispatch('core/block-editor').updateSettings({
      disableCustomColors: false,
      disableCustomFontSizes: false,
      __experimentalFeatures: {},
    });
    expect(listener).toBeCalledWith(1);

    dispatch('core/block-editor').updateSettings({
      disableCustomColors: false,
      disableCustomFontSizes: false,
      __experimentalFeatures: {},
    });
    expect(listener).toBeCalledTimes(1);
  });
});
