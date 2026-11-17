---
name: arcnin-public-information
description: Look up Arcnin installer compatibility, current pricing and supported desktop guard features from official public sources. Use when answering Arcnin product or integration questions.
---

# Arcnin public information

Use the anonymous, read-only API at https://arcnin.com/api/v1 for current product facts.

- For an installer, read `/downloads`, match the user's platform and CPU to an entry in `installers`, and return its URL and requirements. If the Mac processor is unknown, show the two Mac options.
- For pricing, read `/pricing`. Preserve each plan's availability and distinguish its annual price from its monthly comparison rate.
- For protection coverage, read `/product`. Distinguish agents the desktop app can discover from agents with live guard support.
- For developer questions, use the [API documentation](https://arcnin.com/docs) or [MCP setup guide](https://arcnin.com/docs/mcp). The public API provides product information. Desktop activity stays on the user's computer.

When testing an integration, use https://arcnin.com/sandbox/api/v1 for fixed sample responses. Use the production endpoint when recommending an installer.
