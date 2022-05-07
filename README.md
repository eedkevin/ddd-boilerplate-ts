# DDD Boilerplate in Typescript
A Typescript web service follows Domain Driven Design that includes BDD, Unit Test, E2E Test and Performance Test

## Folder Structure
```sh
.
├── src
│   ├── @types  # exposed types
│   ├── apis    # provided APIs
│   │   ├── graphql   # graphql APIs
│   │   └── rest  # restful APIs
│   ├── configs # configs
│   ├── constants # constants
│   ├── domains # domains
│   │   ├── account # account domain
│   │   └── order   # order domain
│   ├── facilities # infra facilities
│   ├── integrations  # system integrations
│   │   └── google   # google integration
│   ├── services  # downstream services
│   └── utils     # utils
└── test
    ├── e2e   # e2e test
    ├── stress # stress test
    └── unit  # unit test
```

## Quick Start
1. install dependencies

```sh
$ yarn install
```

2. lift up the server in dev mode

```sh
$ yarn dev
```

## Test & Coverage
### Unit test

```sh
$ yarn test:unit
```

### E2E test

```sh
$ yarn test:e2e
```

### Stress test

```sh
$ yarn test:stress
```

### Test coverage

```sh
$ yarn test:coverage
```