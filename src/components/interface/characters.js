import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { selectCharacter } from '../../actions/dispatch';
import LoginButton from '../auth/loginButton';

const Characters = ({ characters, selectCharacter }) => (
  <div className="characters">
    <h2>Characters</h2>
    {Object.values(characters).map((character, i) => {
      const onClick = () => selectCharacter(character.CharacterID);
      const className = classNames({
        "character": true,
        "character-active": character.selected
      });
      return (
        <div className={className} onClick={onClick}>
          <p>{character.CharacterName}</p>
        </div>
      );
    })}
    <LoginButton />
  </div>
);

const stateToProps = (state) => ({
  characters: state.characters
});

const dispatchToProps = { selectCharacter };

export default connect(stateToProps, dispatchToProps)(Characters);