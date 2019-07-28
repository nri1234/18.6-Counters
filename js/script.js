var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    getDefaultProps: function() {
        console.log("Ustawiam wartości domyślne");
    },

    componentDidMount: function() {
        console.log(
            "Komponent jest zamontowany"
        );
    },

    componentDidUpdate: function() {
        console.log(
            "Komponent zostal uaktualniony"
        );
    },

    componentWillUpdate: function() {
        console.log("Aktualizuję komponent");
    },

    componentWillUnmount: function() {
        console.log(
            "Usuwam komponent po wykonaniu zadania"
        );
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement(
            "h1",
            { className: "title" },
            "Counters",
            React.createElement(
                "div",
                { className: "app" },
                this.state.counter,
                React.createElement(
                    "button",
                    { onClick: this.increment, className: "increment" },
                    "+"
                ),
                React.createElement(
                    "button",
                    { onClick: this.decrement, className: "decrement" },
                    "-"
                )
            )
        );
    }
});

var element = React.createElement(
    "div",
    {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);
ReactDOM.render(element, document.getElementById("app"));
