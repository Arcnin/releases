# Arcnin downloads

Installers for **Arcnin**, a friendly guard for AI agents. Arcnin sits on your Mac or PC, watches what AI agents try to do, quietly blocks the dangerous moves, and only asks you when a decision is really yours.

## Get the latest version

| Your computer | Download |
| --- | --- |
| Mac with Apple silicon (M1 or newer) | [Arcnin-0.1.0-arm64.dmg](https://github.com/Arcnin/releases/releases/download/v0.1.0/Arcnin-0.1.0-arm64.dmg) |
| Mac with an Intel chip | [Arcnin-0.1.0.dmg](https://github.com/Arcnin/releases/releases/download/v0.1.0/Arcnin-0.1.0.dmg) |
| Windows 10 or 11, 64-bit | [Arcnin-Setup-0.1.0.exe](https://github.com/Arcnin/releases/releases/download/v0.1.0/Arcnin-Setup-0.1.0.exe) |

Macs need macOS 13 or later. Every version is listed under [Releases](https://github.com/Arcnin/releases/releases).

## This is a preview

Preview builds are not yet signed with a publisher certificate, so macOS and Windows show a warning the first time you open them. Signed installers arrive with the beta. If you would rather wait for those, that is a perfectly sensible choice.

Each release lists SHA-256 checksums so you can check that a download arrived intact.

## Arcnin API, MCP server and CLI

Arcnin provides AI agent security for Mac and Windows. Its Claude Code guard checks tool calls locally. The public information service lets developers look up installer URLs, pricing and supported platforms without accessing a desktop installation. [Arcnin website](https://arcnin.com/) · [Arcnin API documentation](https://arcnin.com/docs) · [OpenAPI specification](https://arcnin.com/openapi.json)

To connect an MCP client, select Streamable HTTP and enter `https://arcnin.com/mcp`. The server accepts anonymous requests. Use `get_downloads` to retrieve the current version and official installers. [Arcnin MCP server card](https://arcnin.com/.well-known/mcp/server-card.json)

To use the CLI with Node.js 18 or later, install the client from this repository and request the installer list.

```sh
npm install github:Arcnin/releases
npx arcnin-info downloads
```

The same package exposes a JavaScript client for the public API.

```js
import { getArcninInformation } from 'arcnin-public-information';
const { installers } = await getArcninInformation('downloads');
```

Agents can use the [Arcnin public information skill](skills/arcnin-public-information/SKILL.md) to match an installer to a computer, check plan availability, or look up live guard support.

```sh
npx skills add Arcnin/releases --skill arcnin-public-information
```
