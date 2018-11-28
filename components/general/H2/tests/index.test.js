import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import H2 from '../index';

describe('<H2 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<H2 id={id} />);
    const renderedComponent = enzymeFind(wrapper, H2);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<H2>{children}</H2>);
    const renderedComponent = enzymeFind(wrapper, H2);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
