import React from 'react';
import { mount } from 'enzyme';
import { enzymeFind } from 'styled-components/test-utils';

import P from '../index';

describe('<P />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const wrapper = mount(<P id={id} />);
    const renderedComponent = enzymeFind(wrapper, P);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const wrapper = mount(<P>{children}</P>);
    const renderedComponent = enzymeFind(wrapper, P);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
