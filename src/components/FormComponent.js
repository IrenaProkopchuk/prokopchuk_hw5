import React from "react";

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userEmail: "",
            userMessage: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const value = e.target.value;
        this.setState({
            userName: value
        })
    }

    handleChangeEmail(e) {
        const value = e.target.value;
        this.setState({
            userEmail: value
        })
    }

    handleChangeMessage(e) {
        const value = e.target.value;
        this.setState({
            userMessage: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const json = JSON.stringify(this.state);
        console.log(json);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label>
                        Name:
                            <input type="text" value={this.state.userName} onChange={this.handleChange} />
                        </label>

                        <label>
                            Email
                            <input type="text" value={this.state.userEmail} onChange={this.handleChangeEmail} />
                        </label>

                        <label>
                            Message:
                            <textarea type="text" value={this.state.userMessage} onChange={this.handleChangeMessage} />
                        </label>

                        <button type="submit">Submit</button>
                    </p>
                </form>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>

        )
    }
}

export default FormComponent;
