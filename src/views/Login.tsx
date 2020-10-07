import React from 'react';
import { Text } from 'react-native';
import Button from '../components/Button';
import R from 'res/R';

interface LoginProps {
    login: () => void
}

export default class Login extends React.Component<LoginProps> {

    render() {
        return (
            <>
                <Text style={{ color: R.colors.white }}>Login</Text>
                <Button
                    title={R.i18n.t('login')}
                    onPress={this.props.login}
                />
            </>
        );
    }
}