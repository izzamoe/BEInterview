# Simple Library REST API

Simple Library REST API is a project that demonstrates how to build a REST API using modern web development technologies.

## Technologies Used

- **Programming Language**: JavaScript
- **JavaScript Runtime**: [Bun.js](https://bun.sh/)
- **Backend Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MySQL](https://www.mysql.com/) / [MariaDB](https://mariadb.org/)
- **ORM (Object-Relational Mapping) and Migrations**: [Prisma](https://www.prisma.io/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js
- [Bun.js](https://bun.sh/)

### Installation

1. **Install Bun.js** (if not already installed)
    ```sh
    npm i -g bun
    ```

2. **Copy environment variables**
    ```sh
    cp .env.example .env
    ```

3. **Install dependencies**
    ```sh
    bun install
    ```

4. **Migrate Prisma**
    ```sh
    npx prisma migrate dev
    ```

### Running the Application

For development mode:
```sh
bun run dev
```

### Running Tests

To run tests, use the following command:
```sh
bun test
```

### API Documentation

To view the API documentation, open the following URL in your browser:
[http://localhost:3000/api-docs/](http://localhost:3000/api-docs/)

## References

- [Bun.js](https://bun.sh/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [MariaDB](https://mariadb.org/)
- [Prisma](https://www.prisma.io/)

Feel free to contribute to this project or provide feedback!