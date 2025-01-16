import metaSchema from "./meta-schema.json" assert { type: "json" };
import errorGroups from "./examples/x-error-group-ext.json" assert { type: "json" };
import notification from "./examples/x-notification-openrpc-ext.json" assert { type: "json" };
import transport from "./examples/x-transport-ext.json" assert { type: "json" };

const examples = {
  errorGroups,
  notification,
  transport,
};
export { metaSchema, examples };
