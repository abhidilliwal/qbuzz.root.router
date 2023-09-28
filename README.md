# Running the project

Make sure you have mkcert in the system

```bash
brew install mkcert
```

1. **Initialize mkcert on your machine (creates a local CA)**:

    ```bash
    mkcert -install
    ```

2. **Generate certificates for `localhost`**:

    ```bash
    mkcert localhost
    ```

    This will generate two files: `localhost.pem` (the certificate) and `localhost-key.pem` (the private key).

3. Now you can run the node server

    ```bash
    DEBUG=router:* nodemon start
    ```

4. Now make sure all the apps like `qtelematics` and `incidents` are built as production ready and their repository folders are placed in the same level as this project.

5. goto https://localhost:3000/pages/id.frontend.qtelematics