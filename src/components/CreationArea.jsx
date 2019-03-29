// @flow
import React, { Component } from 'react';
import * as Blazon from '../Blazon';
import Roll from './Roll';

type State = {
    blazonInput: string,
    roll: Array<Blazon.Shield>,
};

export default class CreationArea extends Component<
    {},
    State,
> {
    state = {
        blazonInput: 'sable, a lion gules',
        roll: [],
    };

    handleBlazonChange = (
        event: SyntheticEvent<HTMLInputElement>,
    ) => {
        this.setState({
            blazonInput: event.currentTarget.value,
        });
    };

    emblazon = (event: SyntheticEvent<>) => {
        event.preventDefault();
        this.setState((state: State) => ({
            roll: [
                ...state.roll,
                Blazon.parse(state.blazonInput),
            ],
        }));
    };

    render() {
        return (
            <div className="creation-area">
                <form
                    className="blazon-input-form"
                    onSubmit={this.emblazon}
                >
                    <input
                        type="text"
                        value={this.state.blazonInput}
                        onChange={this.handleBlazonChange}
                    />
                    <button type="submit">Emblazon</button>
                </form>
                <Roll roll={this.state.roll} />
            </div>
        );
    }
}
