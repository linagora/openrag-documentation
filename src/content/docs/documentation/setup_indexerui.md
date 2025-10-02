---
title: Indexer UI
---

## Configuring the Indexer UI

### 1. Download the `indexer-ui` Submodule

> Ensure the `indexer-ui` submodule is initialized and downloaded. If not, run the following command from the root of your `openrag` project:

```bash
// .env
cd <project-name> # openrag project
git submodule update --init --recursive
```

:::note
The `--init --recursive` flags will:

* Initialize all submodules defined in the `.gitmodules` file
* Clone the content of each submodule
* Recursively initialize and update nested submodules
:::

:::caution
Each version of **`openrag`** ships with a specific compatible commit of [indexer-ui](https://github.com/linagora/openrag-admin-ui). The above command is sufficient.
In development mode, to fetch the latest version of `indexer-ui`, run:
```bash title="fetching the latest version of submodules..."
git submodule foreach 'git checkout main && git pull'
```
:::

### 2. Set Environment Variables

To enable the Indexer UI, add the following environment variables to your configuration:

* Replace **`X.X.X.X`** with `localhost` (for local deployment) or your server IP
* Replace **`APP_PORT`** with your FastAPI port (default: 8080)
* Set the **base URL of the Indexer UI** (required to prevent CORS issues). Replace **`INDEXERUI_PORT`** accordingly
* Set the **base URL of your FastAPI backend** (used by the frontend). Replace **`APP_PORT`** accordingly

```bash
INCLUDE_CREDENTIALS=false # Set to true if FastAPI authentication is enabled
INDEXERUI_PORT=8060 # Port for the Indexer UI (default: 3042)
INDEXERUI_URL='http://X.X.X.X:INDEXERUI_PORT'
API_BASE_URL='http://X.X.X.X:APP_PORT'
```