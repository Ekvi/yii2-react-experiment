var React = require('react');

var Example = React.createClass({
    render: function() {
        return(
            <div>
                <ul>
                    <li>{this.props.user.name}</li>
                    <li>{this.props.user.age}</li>
                </ul>
            </div>
        );
    }
});

module.exports = Example;
