import * as Scrivito from "scrivito";
import DetailsPageObjIcon from "../../assets/images/page_obj.svg";
import {
  defaultPageEditingConfigAttributes,
  defaultPageProperties,
} from "../_defaultPageEditingConfig";

Scrivito.provideEditingConfig("DetailsPage", {
  title: "Details Page",
  thumbnail: DetailsPageObjIcon,
  attributes: {
    ...defaultPageEditingConfigAttributes,
  },
  properties: (obj) => [...defaultPageProperties(obj)],
});
