import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import H5 from '../index';

describe('<H5 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<H5 id={id} />);
    const renderedComponent = enzymeFind(wrapper, H5);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<H5>{children}</H5>);
    const renderedComponent = enzymeFind(wrapper, H5);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
