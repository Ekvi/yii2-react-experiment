var Example = require('Example');
//import Example from 'Example.js';

var Article = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Article</h2>
                <p>title: {this.props.article.title}</p>
                <p>author: {this.props.article.author}</p>
            </div>
        );
    }
});

var MainInterface = React.createClass({
    render: function() {
        var article = {title: 'Article', author: 'Dmitry'};

        return (
            <div>
                <h2>Hello from React</h2>
                <p>name: {this.props.name}</p>
                <p>age: {this.props.age}</p>
                <Article article={article}/>
                <Example />
            </div>
        );
    }
});


ReactDOM.render(<MainInterface name={'Dima'} age={32} />, document.getElementById('create-task-form'));