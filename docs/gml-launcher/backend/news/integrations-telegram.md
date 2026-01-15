# From Telegram

# Telegram News API

API for retrieving news from a Telegram channel. Automatically saves all messages from the channel and provides them via REST API.

## Features

- Automatic retrieval of new messages from the channel
- Persistence of messages between restarts
- REST API for fetching messages
- Docker support
- Automatic restart on failures

## Installation

### Standard Installation

1. [Clone the repository](https://github.com/Nik497926/TG-Bot-News-GML)
2. Install dependencies:
```bash
npm install
```
3. Copy the `.env.example` file to `.env` and fill in the necessary environment variables:
```env
BOT_TOKEN=your_bot_token
CHANNEL_USERNAME=@your_channel
PORT=3000
```

### Docker Installation

1. Clone the repository
2. Create a `.env` file with the required environment variables (as described above)
3. Run via Docker Compose:
```bash
docker-compose up -d
```

To update the container:
```bash
docker-compose build && docker-compose up -d
```

## Running

### Standard Run

For development:
```bash
npm run dev
```

For production:
```bash
npm start
```

### Docker Run

Start:
```bash
docker compose up -d
```

View logs:
```bash
docker compose logs -f
```

Stop:
```bash
docker compose down
```

## API Endpoints

### GET /api/news

Returns a list of news from the Telegram channel.

Response format:
```json
{
  "success": true,
  "total": 10,
  "data": [
    {
      "title": "News Title",
      "content": "News Content",
      "date": "2024-01-01T12:00:00.000Z",
      "type": "text",
      "channel": "Channel Name",
      "messageId": 123
    }
  ]
}
```

## Data Storage

- In a standard installation, messages are saved to the `messages.json` file in the project root.
- In a Docker installation, the `messages.json` file is mounted as a volume to persist data between container restarts.

## Requirements

- Node.js 18 or higher
- For Docker installation: Docker and Docker Compose

## Troubleshooting

1. Ensure the bot is added to the channel as an administrator.
2. Verify the bot token and channel name in `.env`.
3. If using Docker, check the logs: `docker compose logs -f`.
4. Ensure the `messages.json` file is writable.