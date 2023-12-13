# Package install

    npm i express dotenv helmet cors http-status-codes uuid bcryptjs
    npm i -D typescript -- install a stable version of typescript as a developer dependency

# To use TypeScript effectively, you need to install type definitions for the packages you installed previously:

npm i -D @types/express @types/dotenv @types/helmet @types/cors @types/http-status-codes @types/uuid @types/bcryptjs

# Improve TypeScript Development Workflow

    npm i -D ts-node-dev
    
    create a dev npm script in package.json to run your server.
     
    "dev": "ts-node-dev --pretty --respawn ./src/app.ts"

    --respawn: Keep watching for changes after the script has exited.

    --pretty: Use pretty diagnostic formatter (TS_NODE_PRETTY).

    ./src/app.ts: This is the application's entry file.
