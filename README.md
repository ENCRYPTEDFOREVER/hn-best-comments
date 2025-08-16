# HN Best Comments Bot

This repository contains a bot that automatically posts the best comments from Hacker News to a specified Telegram channel.

## Getting Started

To set up the HN Best Comments Bot, follow these steps:

1. **Copy Files**: Place `hn.js` and `hn.pb.js` into the `pb_hooks` directory of your PocketBase instance.

2. **Import Collection**: Import the collection from `pb_schema.json` by navigating to **Settings > Import Collections**.

   **Important**: Ensure you select the "Merge with existing collections" option during the import process.

3. **Configure Metadata**: Create new records in the `hnbc_meta` collection:

   - `botToken`: Enter your Telegram Bot Token.

   - `channelId`: Specify the Telegram channel where the bot should post new comments.

## How It Works

The bot operates using two cron jobs:

1. **Comment Retrieval**: Every 15 minutes, the bot pulls fresh comments from Hacker News and saves them to the `hnbc` collection.

2. **Posting Comments**: Every 5 minutes, the bot retrieves 5 unpublished comments from the `hnbc` collection and posts them to the specified Telegram channel.
