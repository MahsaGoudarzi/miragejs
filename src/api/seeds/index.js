export default function seeds(server) {
  server.createList("user", 20);

  server.create("myuser");

  let members = server.create("root", { name: "members" });
  let pages = server.create("root", { name: "pages" });

  server.create("uiconfig", {
    root: members,
    type: "table",
    fetchApi: "/userData",
    headers: ["first name", "last name", "full name", "phone number"],
    values: ["first_name", "last_name", "full_name", "number"],
  });

  server.create("uiconfig", {
    root: pages,
    type: "form",
    submitApi: "/user/create",
    onSuccess: "user is created successfully",
    onError: "something went wrong",
    fields: [
      {
        type: "text",
        label: "first name",
        name: "first_name",
      },
      {
        type: "text",
        label: "last name",
        name: "last_name",
      },
      {
        type: "checkbox",
        label: "married ?",
        name: "is_married",
      },
    ],
  });
}
