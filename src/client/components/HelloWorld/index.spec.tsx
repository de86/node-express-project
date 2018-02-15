import * as React from 'react';
import { renderIntoDocument } from 'react-dom/test-utils';
import HelloWorld from '.';

describe('/components/HelloWorld', () => {
  it('should match the HelloWorld snapshot', () =>
    expect(renderIntoDocument(<HelloWorld />)).toMatchSnapshot('HelloWorld') );

});
