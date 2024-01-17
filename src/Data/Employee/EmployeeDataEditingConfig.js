import * as Scrivito from "scrivito";
import { Employee } from "./EmployeeDataClass";

Scrivito.provideEditingConfig(Employee, {
  title: "Employee",
  attributes: {
    name: { title: "Name" },
    email: { title: "Email" },
    dept: { title: "Department" },
  },
});
