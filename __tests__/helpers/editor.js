/* eslint-disable no-magic-numbers */
import {dispatch} from '@wordpress/data';
import {isValidCustomColors, isValidCustomFontSizes, getColors, getFontSizes, applyStyles, editorReady} from '../../src/helpers';

describe('isValidCustomColors, isValidCustomFontSizes', () => {
  it('should false 1', () => {
    dispatch('core/block-editor').updateSettings({
      disableCustomColors: true,
      disableCustomFontSizes: true,
      __experimentalFeatures: {},
    });

    expect(isValidCustomColors()).toBe(false);
    expect(isValidCustomFontSizes()).toBe(false);
  });

  it('should false 2', () => {
    dispatch('core/block-editor').updateSettings({
      disableCustomColors: undefined,
      disableCustomFontSizes: undefined,
      __experimentalFeatures: {
        global: {
          color: {
            custom: false,
          },
          typography: {
            customFontSize: false,
          },
        },
      },
    });

    expect(isValidCustomColors()).toBe(false);
    expect(isValidCustomFontSizes()).toBe(false);
  });

  it('should true 1', () => {
    dispatch('core/block-editor').updateSettings({
      disableCustomColors: false,
      disableCustomFontSizes: false,
      __experimentalFeatures: {},
    });

    expect(isValidCustomColors()).toBe(true);
    expect(isValidCustomFontSizes()).toBe(true);
  });

  it('should true 2', () => {
    dispatch('core/block-editor').updateSettings({
      disableCustomColors: undefined,
      disableCustomFontSizes: undefined,
      __experimentalFeatures: {
        global: {
          color: {
            custom: true,
          },
          typography: {
            customFontSize: true,
          },
        },
      },
    });

    expect(isValidCustomColors()).toBe(true);
    expect(isValidCustomFontSizes()).toBe(true);
  });
});

describe('getColors', () => {
  it('should get colors 1', () => {
    dispatch('core/block-editor').updateSettings({
      colors: [
        {name: 'test1', color: '#111'},
        {name: 'test2', color: '#222'},
        {name: 'test3', color: '#333'},
      ],
      __experimentalFeatures: {},
    });

    const colors = getColors();
    expect(colors).toHaveLength(3);
    expect(colors[0].name).toBe('test1');
    expect(colors[0].color).toBe('#111');
    expect(colors[1].name).toBe('test2');
    expect(colors[1].color).toBe('#222');
    expect(colors[2].name).toBe('test3');
    expect(colors[2].color).toBe('#333');
  });

  it('should get colors 2', () => {
    dispatch('core/block-editor').updateSettings({
      __experimentalFeatures: {
        global: {
          color: {
            palette: [
              {name: 'test4', color: '#444'},
            ],
          },
        },
      },
      colors: undefined,
    });

    const colors = getColors();
    expect(colors).toHaveLength(1);
    expect(colors[0].name).toBe('test4');
    expect(colors[0].color).toBe('#444');
  });
});

describe('getFontSizes', () => {
  it('should get font sizes 1', () => {
    dispatch('core/block-editor').updateSettings({
      fontSizes: [
        {name: 'test1', size: '10px', slug: 'test1'},
        {name: 'test2', size: '20px', slug: 'test2'},
        {name: 'test3', size: '30px', slug: 'test3'},
      ],
      __experimentalFeatures: {},
    });

    const fontSizes = getFontSizes();
    expect(fontSizes).toHaveLength(3);
    expect(fontSizes[0].name).toBe('test1');
    expect(fontSizes[0].size).toBe('10px');
    expect(fontSizes[0].slug).toBe('test1');
    expect(fontSizes[1].name).toBe('test2');
    expect(fontSizes[1].size).toBe('20px');
    expect(fontSizes[1].slug).toBe('test2');
    expect(fontSizes[2].name).toBe('test3');
    expect(fontSizes[2].size).toBe('30px');
    expect(fontSizes[2].slug).toBe('test3');
  });

  it('should get font sizes 2', () => {
    dispatch('core/block-editor').updateSettings({
      __experimentalFeatures: {
        global: {
          typography: {
            fontSizes: [
              {name: 'test4', size: '40px', slug: 'test4'},
            ],
          },
        },
      },
      fontSizes: undefined,
    });

    const fontSizes = getFontSizes();
    expect(fontSizes).toHaveLength(1);
    expect(fontSizes[0].name).toBe('test4');
    expect(fontSizes[0].size).toBe('40px');
    expect(fontSizes[0].slug).toBe('test4');
  });
});

describe('applyStyles', () => {
  it('should call put', () => {
    const fn = jest.fn();
    jest.spyOn(require('nano-css'), 'create').mockImplementation(() => ({
      put: fn,
    }));

    applyStyles('.test', {
      width: '30px',
    });

    expect(fn).toBeCalledWith('.test', {width: '30px'});
  });
});

describe('editorReady', () => {
  it('should call callback function once', () => {
    jest.useFakeTimers();
    let length = 0;
    jest.spyOn(window.document, 'getElementById').mockReturnValue({
      getElementsByClassName: () => ({
        length: length++,
      }),
    });
    const callback = jest.fn();
    editorReady(callback);
    expect(callback).not.toBeCalled();

    dispatch('core/block-editor').updateSettings({
      disableCustomColors: false,
      disableCustomFontSizes: false,
      __experimentalFeatures: {},
    });
    jest.runAllTimers();
    expect(callback).not.toBeCalled();

    dispatch('core/block-editor').updateSettings({
      disableCustomColors: false,
      disableCustomFontSizes: false,
      __experimentalFeatures: {},
    });
    jest.runAllTimers();
    expect(callback).toBeCalledTimes(1);

    dispatch('core/block-editor').updateSettings({
      disableCustomColors: false,
      disableCustomFontSizes: false,
      __experimentalFeatures: {},
    });
    jest.runAllTimers();
    expect(callback).toBeCalledTimes(1);
  });
});
