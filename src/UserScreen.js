import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchUser } from './users/userActions';

class UserScreen extends Component {
    render() {
        const users = this.props.users;
        const user = users['tdewangan'] || '';
        return (
            <View>
                <Text>Hello</Text>
                <Text>{user.name}</Text>
                <Button
                    title="getUserInfo"
                    onPress={() => this.props.fetchUser('tdewangan')}
                />
            </View>
        );
    }
}

const mapStateToProps = ({ users }) => ({ users });
export default connect(mapStateToProps, { fetchUser })(UserScreen);
