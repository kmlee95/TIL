//여기서 rest api의 정보를 가져온다.
let people = [
  {
    id: 1,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 2,
    name: "Kyungmin",
    age: 20,
    gender: "male",
  },
  {
    id: 3,
    name: "SeungYoen",
    age: 11,
    gender: "female",
  },
  {
    id: 4,
    name: "Test",
    age: 24,
    gender: "male",
  },
];

export const getPeople = () => people;

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};

export const deletePeople = (id) => {
  const cleanedPeople = people.filter((person) => person.id !== id);
  if (people.length > cleanedPeople.length) {
    people = cleanedPeople;
    return true;
  } else {
    return false;
  }
};

export const addPeople = (name, age, gender) => {
  const newPeople = {
    id: `${people.length + 1}`,
    name,
    age,
    gender,
  };
  people.push(newPeople);
  return newPeople;
};
