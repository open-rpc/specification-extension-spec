import metaSchema from "./meta-schema.json";
import errorGroups from "./examples/x-error-group-ext.json";
import notification from "./examples/x-notification-openrpc-ext.json";
import transport from "./examples/x-transport-ext.json";

const examples = {
  errorGroups,
  notification,
  transport,
};
export { metaSchema, examples };
