var React = require('react');
var ReactDOM = require('react-dom');
var Article = require('./components/Article');

var Wiki = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Wiki</h2>
                <Article />
            </div>
        );
    }
});

ReactDOM.render(<Wiki />, document.getElementById('wiki'));
