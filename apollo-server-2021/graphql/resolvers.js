import { getPeople, getById, addPeople, deletePeople } from "./db";

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, { id }) => getById(id),
  },
  Mutation: {
    addPerson: (_, { name, age, gender }) => addPeople(name, age, gender),
    deletePeople: (_, { id }) => deletePeople(id),
  },
};

export default resolvers;
