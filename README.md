# OpenRPC Specification Extension

[Specification Extensions](https://spec.open-rpc.org/#specification-extensions) allows extensions to the OpenRPC Schema and is always prefixed by `"x-"`. The extensions may or may not be supported by the available tooling, but those may be extended as well to add requested support (if tools are internal or open-sourced).

### Goals

- **Define an extension in JSON** - Human and machine readable.
- **Consistent with OpenRPC** - familiar OpenRPC terms.
- **Extend OpenRPC** - so developers can add features and tooling around OpenRPC that isn't currently in the spec, or falls outside of the specification context.
- **Prototype New OpenRPC changes** - new additions to the OpenRPC specification can be created and prototyped as a Specification Extension and have working tooling before being merged into the OpenRPC specification.

You can view the JSON-Schema meta-schema here: [./meta-schema.json](./meta-schema.json).

### Installation

```sh
bash
npm install @open-rpc/specification-extension-spec
```

### Usage

This package contains the OpenRPC Specification Extension JSON Schema and example extensions. It can be imported using CommonJS or ESM:

```ts
import { metaSchema, examples } from "@open-rpc/specification-extension-spec";
```

**NOTE**: Tooling support is still WIP for Specification Extensions.
