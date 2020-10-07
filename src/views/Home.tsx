import React from 'react';
import { Text } from 'react-native';
import Button from '../components/Button';
// @ts-ignore
import R from 'res/R';

interface LogoutProps {
    logout: () => void
}

export default class Home extends React.Component<LogoutProps> {
    render() {
        return (
            <>
                <Text style={{ color: R.colors.white }}>Welcome!</Text>
                <Button
                    title="Se déconnecter"
                    onPress={this.props.logout}
                />
            </>
        );
    }
}