import * as Scrivito from "scrivito";

const database = [
  {
    id: "16",
    name: "Mike Smith",
    email: "mike.smith@example.com",
    dept: "Sales",
  },
  {
    id: "17",
    name: "Ann Wilson",
    email: "ann.wilson@example.com",
    dept: "Sales",
  },
  {
    id: "18",
    name: "Ben Jones",
    email: "ben.jones@example.com",
    dept: "Marketing",
  },
  {
    id: "19",
    name: "Jane Smart",
    email: "jane.smart@example.com",
    dept: "Marketing",
  },
];

export const Employee = Scrivito.provideDataClass("Employee", {
  connection: {
    get: async (id) => database.find((elem) => elem.id === id),

    index: async (params) => {
      const filters = params.filters();

      let results = database;

      Object.keys(filters).forEach((key) => {
        results = results.filter((result) => result[key] === filters[key]);
      });

      results = results.map((data) => data.id);

      return { results };
    },
  },
});
