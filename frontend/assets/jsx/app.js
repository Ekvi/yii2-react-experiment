var React = require('react');
var ReactDOM = require('react-dom');
var Example = require('./components/Example');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Example</h2>
                <Example user={this.props.user} />
            </div>
        );
    }
});

var user = {
    name: 'Dmitry',
    age: 32
};

ReactDOM.render(<Main user={user} />, document.getElementById('example'));
