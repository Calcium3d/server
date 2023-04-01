# Medical App Backend

This is the backend api for a medical app being developed by [RYzeOnGit](https://github.com/RYzeOnGit)

## Setup
```sudo apt install postgresql```

Install postgres, then inside a database create a table known as ``Patient``

Run,

```
npm run migrate
```

Update links inside a ``.env``

## Usage
* ``npm start`` - To start the apollo server
* ``npm run migrate`` - To run a Prisma Migration from postgresql
* ``npm run studio`` - To run Prisma Studio

## Contribution
* Create an issue
* Wait to be assigned
* Fork, and submit pull request. 