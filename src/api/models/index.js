import { Model, hasMany, belongsTo } from "miragejs";

export default {
  user: Model,
  profile: Model.extend({
    user: belongsTo(),
  }),
  root: Model.extend({
    uiconfig: hasMany(),
  }),
  uiconfig: Model.extend({
    root: belongsTo(),
  }),
  myuser: Model,

  user: Model,
};
