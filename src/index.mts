import metaSchema from "./meta-schema.json" assert { type: "json" };
import errorGroups from "./examples/x-error-group-ext.json" assert { type: "json" };
import notification from "./examples/x-notification-openrpc-ext.json" assert { type: "json" };
import transport from "./examples/x-transport-ext.json" assert { type: "json" };
import openrpcUsingExtensions from "./examples/example-openrpc-with-spec-extensions.json" assert { type: "json" };

const examples = {
  errorGroups,
  notification,
  transport,
  openrpcUsingExtensions,
};
export { metaSchema, examples };
