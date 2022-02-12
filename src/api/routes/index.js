export default function routes() {
  this.namespace = "api";
  this.resource("users");
  this.resource("products");
  this.get("messages", (schema, request) => {
    const {
      queryParams: { userId },
    } = request;

    return schema.messages.where({ userId });
  });

  this.get("user", (schema) => {
    return schema.myusers.all();
  });

  this.post("user/create", (schema, request) => {
    const model = JSON.parse(request.requestBody);
    return schema.myusers.create(model);
  });

  this.get(":root/uiconfig", (schema, request) => {
    const root = request.params.root;
    let result = schema.roots.findBy({ name: root });

    return result.uiconfig;
  });

  this.passthrough();
}
