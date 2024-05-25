import React from 'react';
import spades_01 from '../assets/cards/fronts/spades_1.svg';
import spades_02 from '../assets/cards/fronts/spades_2.svg';
import spades_03 from '../assets/cards/fronts/spades_3.svg';
import spades_04 from '../assets/cards/fronts/spades_4.svg';
import spades_05 from '../assets/cards/fronts/spades_5.svg';
import spades_06 from '../assets/cards/fronts/spades_6.svg';
import spades_07 from '../assets/cards/fronts/spades_7.svg';
import spades_08 from '../assets/cards/fronts/spades_8.svg';
import spades_09 from '../assets/cards/fronts/spades_9.svg';
import spades_10 from '../assets/cards/fronts/spades_10.svg';
import spades_11 from '../assets/cards/fronts/spades_11.svg';
import spades_12 from '../assets/cards/fronts/spades_12.svg';
import spades_13 from '../assets/cards/fronts/spades_13.svg';
import clubs_01 from '../assets/cards/fronts/clubs_1.svg';
import clubs_02 from '../assets/cards/fronts/clubs_2.svg';
import clubs_03 from '../assets/cards/fronts/clubs_3.svg';
import clubs_04 from '../assets/cards/fronts/clubs_4.svg';
import clubs_05 from '../assets/cards/fronts/clubs_5.svg';
import clubs_06 from '../assets/cards/fronts/clubs_6.svg';
import clubs_07 from '../assets/cards/fronts/clubs_7.svg';
import clubs_08 from '../assets/cards/fronts/clubs_8.svg';
import clubs_09 from '../assets/cards/fronts/clubs_9.svg';
import clubs_10 from '../assets/cards/fronts/clubs_10.svg';
import clubs_11 from '../assets/cards/fronts/clubs_11.svg';
import clubs_12 from '../assets/cards/fronts/clubs_12.svg';
import clubs_13 from '../assets/cards/fronts/clubs_13.svg';
import hearts_01 from '../assets/cards/fronts/hearts_1.svg';
import hearts_02 from '../assets/cards/fronts/hearts_2.svg';
import hearts_03 from '../assets/cards/fronts/hearts_3.svg';
import hearts_04 from '../assets/cards/fronts/hearts_4.svg';
import hearts_05 from '../assets/cards/fronts/hearts_5.svg';
import hearts_06 from '../assets/cards/fronts/hearts_6.svg';
import hearts_07 from '../assets/cards/fronts/hearts_7.svg';
import hearts_08 from '../assets/cards/fronts/hearts_8.svg';
import hearts_09 from '../assets/cards/fronts/hearts_9.svg';
import hearts_10 from '../assets/cards/fronts/hearts_10.svg';
import hearts_11 from '../assets/cards/fronts/hearts_11.svg';
import hearts_12 from '../assets/cards/fronts/hearts_12.svg';
import hearts_13 from '../assets/cards/fronts/hearts_13.svg';
import diamonds_01 from '../assets/cards/fronts/diamonds_1.svg';
import diamonds_02 from '../assets/cards/fronts/diamonds_2.svg';
import diamonds_03 from '../assets/cards/fronts/diamonds_3.svg';
import diamonds_04 from '../assets/cards/fronts/diamonds_4.svg';
import diamonds_05 from '../assets/cards/fronts/diamonds_5.svg';
import diamonds_06 from '../assets/cards/fronts/diamonds_6.svg';
import diamonds_07 from '../assets/cards/fronts/diamonds_7.svg';
import diamonds_08 from '../assets/cards/fronts/diamonds_8.svg';
import diamonds_09 from '../assets/cards/fronts/diamonds_9.svg';
import diamonds_10 from '../assets/cards/fronts/diamonds_10.svg';
import diamonds_11 from '../assets/cards/fronts/diamonds_11.svg';
import diamonds_12 from '../assets/cards/fronts/diamonds_12.svg';
import diamonds_13 from '../assets/cards/fronts/diamonds_13.svg';
import blank_card from '../assets/cards/fronts/blank_card.svg';
import joker_black from '../assets/cards/fronts/joker_black.svg';
import joker_red from '../assets/cards/fronts/joker_red.svg';
import styles from './Card.module.css';
import abstract_clouds from '../assets/cards/backs/abstract_clouds.svg';
import abstract_scene from '../assets/cards/backs/abstract_scene.svg';
import abstract from '../assets/cards/backs/abstract.svg';
import astronaut from '../assets/cards/backs/astronaut.svg';
import blue from '../assets/cards/backs/blue.svg';
import blue2 from '../assets/cards/backs/blue2.svg';
import cars from '../assets/cards/backs/cars.svg';
import castle from '../assets/cards/backs/castle.svg';
import fish from '../assets/cards/backs/fish.svg';
import frog from '../assets/cards/backs/frog.svg';
import red from '../assets/cards/backs/red.svg';
import red2 from '../assets/cards/backs/red2.svg';

const imageObject = {
  spades_01,
  spades_02,
  spades_03,
  spades_04,
  spades_05,
  spades_06,
  spades_07,
  spades_08,
  spades_09,
  spades_10,
  spades_11,
  spades_12,
  spades_13,
  diamonds_01,
  diamonds_02,
  diamonds_03,
  diamonds_04,
  diamonds_05,
  diamonds_06,
  diamonds_07,
  diamonds_08,
  diamonds_09,
  diamonds_10,
  diamonds_11,
  diamonds_12,
  diamonds_13,
  clubs_01,
  clubs_02,
  clubs_03,
  clubs_04,
  clubs_05,
  clubs_06,
  clubs_07,
  clubs_08,
  clubs_09,
  clubs_10,
  clubs_11,
  clubs_12,
  clubs_13,
  hearts_01,
  hearts_02,
  hearts_03,
  hearts_04,
  hearts_05,
  hearts_06,
  hearts_07,
  hearts_08,
  hearts_09,
  hearts_10,
  hearts_11,
  hearts_12,
  hearts_13,
  blank_card,
  joker_black,
  joker_red,
  abstract_clouds,
  abstract_scene,
  abstract,
  astronaut,
  blue,
  blue2,
  cars,
  castle,
  fish,
  frog,
  red,
  red2
};

const Card: React.FC<{ name: string }> = ({ name }) => {
  console.log(name);

  return (
    <div className={styles.card}>
      <img
        src={imageObject[name.toLocaleLowerCase() as keyof typeof imageObject]}
        alt=""
        className={styles.cardImage}
      />
    </div>
  );
};

export default Card;
