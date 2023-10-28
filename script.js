function generateCalendar() {
    const calendar = document.querySelector('.dates');
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
    for (let i = 1; i <= daysInMonth; i++) {
      const dateElement = document.createElement('div');
      dateElement.classList.add('date');
  
      if (i === today.getDate() && currentMonth === today.getMonth()) {
        dateElement.classList.add('current-date');
      }
  
      dateElement.textContent = i;
  
      if (Math.random() < 0.1) { // Add red background to approximately 10% of dates
        dateElement.classList.add('matchday');
      }
  
      calendar.appendChild(dateElement);
    }
  }
  
  generateCalendar();
  const apiKey = 'c9f0890dc4f86b1c1f759e6e55a244e4fbbf49de2fd398571d177160e63fe791'; // Replace with your API key
const newsContainer = document.querySelector('.news-list');

// Fetch football news from an API (replace with your API endpoint)
fetch(`https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    data.articles.forEach(article => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');

      const newsImage = document.createElement('img');
      newsImage.src = article.image;
      newsImage.alt = article.title;

      const newsTitle = document.createElement('h3');
      newsTitle.textContent = article.title;

      const newsDescription = document.createElement('p');
      newsDescription.textContent = article.description;

      const newsLink = document.createElement('a');
      newsLink.href = article.url;
      newsLink.textContent = 'Read More';

      newsItem.appendChild(newsImage);
      newsItem.appendChild(newsTitle);
      newsItem.appendChild(newsDescription);
      newsItem.appendChild(newsLink);

      newsContainer.appendChild(newsItem);
    });
  })
  .catch(error => {
    console.error('Error fetching news:', error);
  });
