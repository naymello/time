import React, { Component } from 'react';

import * as S from '../styles';

export class Chords extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chordTypes: [
        { id: 1, name: 'm' },
        { id: 2, name: '7' },
        { id: 3, name: 'm7' },
        { id: 4, name: 'maj7' },
        { id: 5, name: 'mM7' },
        { id: 6, name: '6' },
        { id: 7, name: 'm6' },
        { id: 8, name: '6/9' },
        { id: 9, name: '5' },
        { id: 10, name: '9' },
        { id: 11, name: 'm9' },
        { id: 12, name: 'maj9' },
        { id: 13, name: '11' },
        { id: 14, name: 'm11' },
        { id: 15, name: '13' },
        { id: 16, name: 'm13' },
        { id: 17, name: 'maj13' },
        { id: 18, name: 'add' },
        { id: 19, name: '7-5' },
        { id: 20, name: '7+5' },
        { id: 21, name: 'sus' },
        { id: 22, name: 'dim' },
        { id: 23, name: 'dim7' },
        { id: 24, name: 'm7b5' },
        { id: 25, name: 'aug' },
        { id: 26, name: 'aug7' }
      ]
    }
  }

  render() {
    return (
      <div>
        <S.ShowAll
          onClick={this.props.toggleShowAll}
        >
          {this.props.showAll ? 'Hide' : 'Show'} all {this.props.selectedNote} chords
        </S.ShowAll>

        <S.Chords>
          {this.state.chordTypes.map(chordType => {
            const chordName = `${this.props.selectedNote}${chordType.name}`;

            return (
              <div key={chordType.id} style={{ display: this.props.showAll ? 'block' : 'none' }}>
                <input
                  type="radio"
                  id={chordName}
                  name="chord"
                  value={chordName}
                  onClick={this.props.handleChordChange}
                />
                <label
                  htmlFor={chordName}
                  style={{ color: chordName === this.props.selectedChord ? '#3B93BF' : '#001724' }}
                >
                  {chordName}
                </label>
              </div>
            );
          })}
        </S.Chords>
      </div>
    );
  }
}

export default Chords;