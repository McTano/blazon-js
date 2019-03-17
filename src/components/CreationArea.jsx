// @flow
import React, { Component } from 'react';
import { parseBlazon } from '../Blazon';
import type { Blazon } from '../Blazon';
import Roll from './Roll';

type State = { blazonInput: string, roll: Array<Blazon> };

export default class CreationArea extends Component<{}, State> {
    state = {
        blazonInput: 'sable, a lion gules',
        roll: [],
    };

    handleBlazonChange = (event: SyntheticMouseEvent<HTMLInputElement>) => {
        this.setState({
            blazonInput: event.currentTarget.value,
        });
    };

    emblazon = () => {
        this.setState((state: State) => ({
            roll: [...state.roll, parseBlazon(state.blazonInput)],
        }));
    };

    render() {
        return (
            <div className="creation-area">
                <div className="input-container">
                    <p>What would you like me to blazon?</p>
                    <input
                        type="text"
                        value={this.state.blazonInput}
                        onChange={this.handleBlazonChange}
                    />
                    <button type="button" onClick={this.emblazon}>
                        Emblazon
                    </button>
                </div>
                <Roll roll={this.state.roll} />
            </div>
        );
    }
}
