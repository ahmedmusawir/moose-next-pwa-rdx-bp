import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import H6 from '../index';

describe('<H6 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<H6 id={id} />);
    const renderedComponent = enzymeFind(wrapper, H6);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<H6>{children}</H6>);
    const renderedComponent = enzymeFind(wrapper, H6);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
