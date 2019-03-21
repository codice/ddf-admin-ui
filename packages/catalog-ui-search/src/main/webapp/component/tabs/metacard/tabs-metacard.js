/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details. A copy of the GNU Lesser General Public License is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/
/*global define*/
const Marionette = require('marionette')
const Tabs = require('../tabs')
const MetacardBasicView = require('../../editor/metacard-basic/metacard-basic.view.js')
const MetacardAdvancedView = require('../../editor/metacard-advanced/metacard-advanced.view.js')
const MetacardHistoryView = require('../../metacard-history/metacard-history.view.js')
const MetacardAssociationsView = require('../../metacard-associations/metacard-associations.view.js')
const MetacardQualityView = require('../../metacard-quality/metacard-quality.view.js')
const MetacardActionsView = require('../../metacard-actions/metacard-actions.view.js')
const MetacardPreviewView = require('../../metacard-preview/metacard-preview.view.js')
import React from 'react'
import MetacardOverwrite from '../../metacard-overwrite/metacard-overwrite.view.js'
import MetacardArchive from '../../../react-component/container/metacard-archive'

const MetacardOverwriteView = Marionette.LayoutView.extend({
  template: () => <MetacardOverwrite />,
})

const MetacardArchiveView = Marionette.LayoutView.extend({
  template() {
    return (
      <MetacardArchive selectionInterface={this.options.selectionInterface} />
    )
  },
})

module.exports = Tabs.extend({
  defaults: {
    tabs: {
      Summary: MetacardBasicView,
      Details: MetacardAdvancedView,
      Preview: MetacardPreviewView,
      History: MetacardHistoryView,
      Associations: MetacardAssociationsView,
      Quality: MetacardQualityView,
      Actions: MetacardActionsView,
      Archive: MetacardArchiveView,
      Overwrite: MetacardOverwriteView,
    },
  },
})
