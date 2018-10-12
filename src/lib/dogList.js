import Dog from '../class/dog'

const dog1 = new Dog('レオ', 4, 'チワワ');
const dog2 = new Dog('モコ', 1, 'チワワ');
const dog3 = new Dog('ベン', 3, 'プードル');
const dog4 = new Dog('ケン', 2, 'チワワ');

const dogList = [
  {name: 'レオ', value: dog1},
  {name: 'モコ', value: dog2},
  {name: 'ベン', value: dog3},
  {name: 'ケン', value: dog4},
]

export default dogList;
