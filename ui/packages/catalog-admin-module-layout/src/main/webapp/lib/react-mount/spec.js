/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation, either version 3 of the
 * License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details. A copy of the GNU Lesser General Public License
 * is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/
import React from 'react'

import Mount from './'

import { mount } from 'enzyme'

describe('<Mount />', () => {
  it('should fire on when mounted', done => {
    mount(<Mount on={() => done()} />)
  })

  it('should fire off when unmounted', done => {
    const wrapper = mount(<Mount off={() => done()} />)
    wrapper.unmount()
  })

  it('should fire did when rendered', done => {
    const div = document.createElement('div')
    const wrapper = mount(<Mount did={() => done()} />, { attachTo: div })
    wrapper.detach()
  })
})
