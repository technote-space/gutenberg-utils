/* eslint-disable no-magic-numbers */
import { getAnimationUseClass } from '../../src/helpers';

describe('getAnimationUseClass', () => {
	it('should return class', () => {
		expect(getAnimationUseClass(undefined)).toBe('no-animation');
	});

	it('should return null', () => {
		expect(getAnimationUseClass({})).toBeNull();
	});

	it('should return proper value', () => {
		if (wp.components.Animate) {
			expect(getAnimationUseClass()).toBeNull();
		} else {
			expect(getAnimationUseClass()).toBe('no-animation');
		}
	});
});
