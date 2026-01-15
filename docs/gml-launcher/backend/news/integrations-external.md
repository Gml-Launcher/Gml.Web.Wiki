---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Custom Implementation

This section describes the API for importing news from an external resource. This API provides access to news via a REST interface.

## API Endpoint

### GET /api/news

This endpoint returns a list of news items.

#### Query Parameters

| Parameter | Type   | Required | Description                          |
| --------- | ------ | -------- | ------------------------------------ |
| limit     | number | No       | Limit the number of news items returned |
| offset    | number | No       | Offset for pagination                |

#### Response Format

```json
[
  {
    "id": 1,
    "title": "News Title",
    "description": "News Content",
    "createdAt": "2024-01-01T12:00:00.000Z"
  },
  {
    "id": 2,
    "title": "Another News",
    "description": "Text of another news item",
    "createdAt": "2024-01-02T15:30:00.000Z"
  }
]
```

#### Response Field Descriptions

| Field       | Type   | Description                      |
| ----------- | ------ | -------------------------------- |
| id          | number | Unique news identifier           |
| title       | string | News title                       |
| description | string | Full news text                   |
| createdAt   | string | Publication date in ISO format   |

## Examples

<Tabs>
<TabItem value="javascript" label="JavaScript">

```javascript
// Example of fetching news using Fetch API
async function getNews(limit = 10, offset = 0) {
    try {
        const response = await fetch(`https://your-api.com/api/news?limit=${limit}&offset=${offset}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const newsItems = await response.json();

        console.log(`Received ${newsItems.length} news items`);

        // Processing received news
        newsItems.forEach(news => {
            console.log(`${news.title} (${new Date(news.createdAt).toLocaleDateString()})`);
            console.log(news.description);
            console.log('---');
        });

        return newsItems;
    } catch (error) {
        console.error('Error fetching news:', error);
        return null;
    }
}

// Usage
getNews(5, 0).then(result => {
    // Additional processing of the result
});
```

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Example of fetching and saving news to a database

// Function to fetch news from the API
function fetchNews($limit = 10, $offset = 0) {
    $url = "https://your-api.com/api/news?limit={$limit}&offset={$offset}";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);

    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        echo 'cURL Error: ' . curl_error($ch);
        return null;
    }

    curl_close($ch);

    return json_decode($response, true);
}

// Function to save news to the database
function saveNewsToDatabase($newsItems) {
    // Database connection parameters
    $host = 'localhost';
    $dbname = 'news_database';
    $username = 'root';
    $password = 'password';

    try {
        // Database connection
        $pdo = new PDO("mysql:host={$host};dbname={$dbname}", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Prepare statement for inserting or updating news
        $stmt = $pdo->prepare("
            INSERT INTO news (external_id, title, description, created_at)
            VALUES (:external_id, :title, :description, :created_at)
            ON DUPLICATE KEY UPDATE
            title = :title,
            description = :description,
            created_at = :created_at
        ");

        // Process each news item
        $count = 0;
        foreach ($newsItems as $news) {
            $stmt->execute([
                ':external_id' => $news['id'],
                ':title' => $news['title'],
                ':description' => $news['description'],
                ':created_at' => $news['createdAt']
            ]);
            $count++;
        }

        echo "Successfully saved {$count} news items\n";
        return true;

    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage() . "\n";
        return false;
    }
}

// Table creation (run once during setup)
function createNewsTable() {
    $host = 'localhost';
    $dbname = 'news_database';
    $username = 'root';
    $password = 'password';

    try {
        $pdo = new PDO("mysql:host={$host};dbname={$dbname}", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $pdo->exec("
            CREATE TABLE IF NOT EXISTS news (
                id INT AUTO_INCREMENT PRIMARY KEY,
                external_id INT UNIQUE,
                title VARCHAR(255) NOT NULL,
                description TEXT NOT NULL,
                created_at DATETIME NOT NULL,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        ");

        echo "News table successfully created\n";
        return true;

    } catch (PDOException $e) {
        echo "Error creating table: " . $e->getMessage() . "\n";
        return false;
    }
}

// Usage
createNewsTable(); // Run once during setup
$newsItems = fetchNews(20, 0);

if ($newsItems && is_array($newsItems)) {
    saveNewsToDatabase($newsItems);
} else {
    echo "Failed to retrieve news data\n";
}
?>
```

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace NewsApiClient
{
    // Class for API response deserialization
    public class NewsItem
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreatedAt { get; set; }
    }

    // Class for working with the News API
    public class NewsApiClient
    {
        private readonly HttpClient _httpClient;
        private readonly string _baseUrl;

        public NewsApiClient(string baseUrl)
        {
            _httpClient = new HttpClient();
            _baseUrl = baseUrl;
        }

        public async Task<List<NewsItem>> GetNewsAsync(int limit = 10, int offset = 0)
        {
            try
            {
                string url = $"{_baseUrl}/api/news?limit={limit}&offset={offset}";
                HttpResponseMessage response = await _httpClient.GetAsync(url);

                response.EnsureSuccessStatusCode();

                string responseBody = await response.Content.ReadAsStringAsync();
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                List<NewsItem> newsItems = JsonSerializer.Deserialize<List<NewsItem>>(responseBody, options);
                return newsItems;
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"HTTP Request Error: {e.Message}");
                return null;
            }
            catch (JsonException e)
            {
                Console.WriteLine($"JSON Deserialization Error: {e.Message}");
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine($"General Error: {e.Message}");
                return null;
            }
        }
    }

    // Usage example
    class Program
    {
        static async Task Main(string[] args)
        {
            string apiUrl = "https://your-api.com";
            var client = new NewsApiClient(apiUrl);

            var newsItems = await client.GetNewsAsync(5, 0);

            if (newsItems != null && newsItems.Count > 0)
            {
                Console.WriteLine($"Received {newsItems.Count} news items");

                foreach (var news in newsItems)
                {
                    Console.WriteLine($"ID: {news.Id}");
                    Console.WriteLine($"Title: {news.Title}");
                    Console.WriteLine($"Date: {news.CreatedAt.ToLocalTime()}");
                    Console.WriteLine($"Content: {news.Description}");
                    Console.WriteLine(new string('-', 50));
                }
            }
            else
            {
                Console.WriteLine("Failed to retrieve news");
            }
        }
    }
}
```

</TabItem>
</Tabs>

## Integration with GML

To integrate the News API with GML:

1. Ensure your API is running and accessible over the network.
2. In the GML control panel, go to the integrations section.
3. Select "Import news from an external resource".
4. Provide the URL of your API that returns news in the format described above.
5. Save the settings.

After successful integration, news will automatically appear in the GML launcher. Note that GML expects an array of objects with fields `id`, `title`, `description`, and `createdAt`. If your API returns data in a different format, you will need to create a middleware layer to transform the data.
