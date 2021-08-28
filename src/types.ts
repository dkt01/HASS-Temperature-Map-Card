// https://github.com/dkt01/HASS-Temperature-Map-Card
// Copyright (C) 2021 David Turner (dkt01)
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import { ActionConfig,
         LovelaceCard,
         LovelaceCardConfig,
         LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'temperature-map-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

export interface StateElementConfig {
  entity: string;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
  icon?: string;
  state_color?: boolean;
}

// TODO Add your configuration elements here for type-checking
export interface TemperatureMapCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  entity?: string;
  // show_warning?: boolean;
  // show_error?: boolean;
  // test_gui?: boolean;
  // entity?: string;
  // tap_action?: ActionConfig;
  // hold_action?: ActionConfig;
  // double_tap_action?: ActionConfig;
  // elements: StateElementConfig[];
  image?: string;
}
