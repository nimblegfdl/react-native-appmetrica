import React from 'react';
import {
    AppRegistry,
} from 'react-native';

import Navigation from './src/Navigation';

export default class RNAppMetrika extends React.PureComponent {
    render() {
        return (
            <Navigation/>
        );
    }
}

AppRegistry.registerComponent('RNAppMetrika', () => RNAppMetrika);
