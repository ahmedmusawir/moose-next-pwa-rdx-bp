import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import H4 from '../index';

describe('<H4 />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<H4 id={id} />);
    const renderedComponent = enzymeFind(wrapper, H4);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<H4>{children}</H4>);
    const renderedComponent = enzymeFind(wrapper, H4);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
