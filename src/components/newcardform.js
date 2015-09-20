import React from 'react';

class NewCardForm extends React.Component {
    constructor (props) {
        super(props);

        this.types = {
            NORMAL    : 1,
            ABSTRACT  : 2,
            INTERFACE : 3
        };

        this.state = {
            name             : '',
            super            : '',
            sub              : '',
            type             : this.types.NORMAL,
            responsibilities : '',
            collaborators    : ''
        };
    }

    handleName (evt) {
        this.setState({
            name: evt.target.value
        });
    }

    handleSuper (evt) {
        this.setState({
            super: evt.target.value
        });
    }

    handleSub (evt) {
        this.setState({
            sub: evt.target.value
        });
    }

    handleType (evt) {
        this.setState({
            type: evt.target.value
        });
    }

    handleResponsibilities (evt) {
        this.setState({
            responsibilities: evt.target.value
        });
    }

    handleCollaborators (evt) {
        this.setState({
            collaborators: evt.target.value
        });
    }

    render () {
        return (
            <div id='new-card'>
                <h2 className='title'>New card</h2>

                <label>Class name:</label>
                <input type='text' value={this.state.name} onChange={this.handleName.bind(this)} />

                <label>Superclasses:</label>
                <input type='text' value={this.state.super} onChange={this.handleSuper.bind(this)} />

                <label>Subclasses:</label>
                <input type='text' value={this.state.sub} onChange={this.handleSub.bind(this)} />

                <label>Type:</label>
                <label className='new-type'>
                    <input type='radio' name='type'
                    checked={this.state.type == this.types.NORMAL}
                    value={this.types.NORMAL}
                    onChange={this.handleType.bind(this)} />
                    Normal
                </label>
                <label className='new-type'>
                    <input type='radio' name='type'
                    checked={this.state.type == this.types.ABSTRACT}
                    value={this.types.ABSTRACT}
                    onChange={this.handleType.bind(this)} />
                    Abstract
                </label>
                <label className='new-type'>
                    <input type='radio' name='type'
                    checked={this.state.type == this.types.INTERFACE}
                    value={this.types.INTERFACE}
                    onChange={this.handleType.bind(this)} />
                    Interface
                </label>

                <label>Responsibilities (1 per line):</label>
                <textarea value={this.state.responsibilities} onChange={this.handleResponsibilities.bind(this)} />

                <label>Collaborators (1 per line):</label>
                <textarea value={this.state.collaborators} onChange={this.handleCollaborators.bind(this)} />

                <button onClick={this.props.onAdd.bind(null, this.state)}>Add card</button>
            </div>
        );
    }
}

export default NewCardForm;
