import React from 'react';
import {Link} from 'react-router';

class Navigation extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <Link
                    to='somewhere'
                    className='btn btn-default'
                    params={this.props}>Click me</Link>
    }
}
Navigation.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Navigation;