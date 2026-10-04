# Onion architecture in TypeScript

A small example of onion architecture in TypeScript. It demonstrates how
business logic can remain independent of input/output concerns by pointing
dependencies inward and supplying infrastructure at the application's edge.

This is a TypeScript port of
[Onion architecture in a nutshell](https://gist.github.com/wallymathieu/68b14bcd3e45c4c5b040b60c558a5318).

## Structure

The example is split into four layers:

1. [`1_domain.ts`](src/1_domain.ts) contains pure business logic and has no
   knowledge of input/output.
2. [`2_app.ts`](src/2_app.ts) coordinates the domain operation. It declares the
   asynchronous input it needs rather than choosing an implementation.
3. [`3_infra.ts`](src/3_infra.ts) implements that input using an HTTP request.
   `getConfigurationUrl` is intentionally left as an application-specific
   configuration point.
4. [`4_index.ts`](src/4_index.ts) is the composition root. It connects the
   application layer to the infrastructure implementation.

The dependency direction is:

```text
composition root -> application -> domain
       |
       +----------> infrastructure
```

The domain therefore remains easy to test without network access, while the
outermost layer decides which infrastructure to use.

## Development

Install dependencies:

```sh
npm install
```

Run the tests:

```sh
npm test
```

Other useful checks:

```sh
npm run type:check
npm run format:check
npm run lint:check
npm run spell:check
```

## License

MIT
