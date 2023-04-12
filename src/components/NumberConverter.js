import React from 'react';

class NumberConverter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number1: '',
            number2: ''
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        if (/^\d*$/.test(value)) {
            this.setState({
                [name]: value
            });
        }
    }

    render() {
        const { number1, number2 } = this.state;

        return (
            <div>
                <div>
                    <label htmlFor="number1">Enter Number 1:</label>
                    <input
                        type="text"
                        id="number1"
                        name="number1"
                        value={number1}
                        onChange={this.handleChange}
                    />
                    {number1 && (
                        <div>
                            Converted Values:
                            <div>{Number(number1) * 0.5}</div>
                            <div>{Number(number1) * 0.05}</div>
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="number2">Enter Number 2:</label>
                    <input
                        type="text"
                        id="number2"
                        name="number2"
                        value={number2}
                        onChange={this.handleChange}
                    />
                    {number2 && (
                        <div>
                            Converted Values:
                            <div>{Number(number2) * 0.5}</div>
                            <div>{Number(number2) * 0.05}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default NumberConverter;


