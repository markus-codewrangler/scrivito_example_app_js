import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("LinkWidget", {
  title: "Link List item",
  attributes: {
    link: {
      title: "Link",
      description:
        "If no title is given, the obj's title or the external URl will be shown.",
    },
  },
  properties: ["link"],
  validations: [
    [
      "link",

      link => {
        if (!link) {
          return { message: "The link should be set.", severity: "warning" };
        }
      },
    ],
  ],
});
