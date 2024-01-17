import * as Scrivito from "scrivito";
import { defaultPageAttributes } from "../_defaultPageAttributes";

export const DetailsPage = Scrivito.provideObjClass("DetailsPage", {
  attributes: {
    data: "datalocator",
    ...defaultPageAttributes,
  },
});
