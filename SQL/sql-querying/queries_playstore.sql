-- 1. Find the app with an ID of 1880:
SELECT app_name FROM analytics WHERE id = 1880;

-- 2. Find the id and app name that were last updated on August 01, 2018:
SELECT id, app_name FROM analytics WHERE last_updated = '2018-08-01';

-- 3. Count number of apps in each category:
SELECT category, COUNT(*) FROM analytics GROUP BY category;

-- 4. Find top 5-most reviewed apps and the number of reviews for each:
SELECT app_name, reviews AS total_reviews FROM analytics ORDER BY total_reviews DESC LIMIT 5;

-- 5. Find the app that has the most reviews with a rating >= 4.8:
SELECT app_name, rating, reviews FROM analytics WHERE rating >= 4.8 ORDER BY reviews DESC LIMIT 1;

-- 6. Find the average rating for each category ordered by highest to lowest rated:
SELECT rating, category FROM analytics GROUP BY rating, category ORDER BY rating DESC;

-- 7. Find the name, price and rating of most expensive app with rating <3:
SELECT app_name, price, rating FROM analytics WHERE rating < 3 ORDER BY price DESC LIMIT 1;

-- 8. Find all aps with a min install not exceeding 50, that have a rating. Order results by highest rated first:
SELECT app_name, rating, min_installs FROM analytics WHERE min_installs <= 50 AND rating > 0 ORDER BY rating DESC;

-- 9. Find the names of all apps rated <3 with at least 10000 reviews:
SELECT app_name, rating, reviews FROM analytics WHERE rating < 3 AND reviews >= 10000;

-- 10. Find the top 10 most-reviewed apps that cost between 10 cents and a dollar:
SELECT app_name, reviews FROM analytics WHERE price BETWEEN .10 AND 1.00; 

-- 11. Find the most outdated app:
SELECT app_name, last_updated FROM analytics ORDER BY last_updated ASC LIMIT 1;

-- 12. Find the most expensive app:
SELECT app_name, price FROM analytics ORDER BY price ASC LIMIT 1;

-- 13. Count all the reviews in the Google Play Store:
SELECT SUM(reviews) FROM analytics;

-- 14. Find all categories that have > 300 apps in them:
SELECT category, COUNT(*) FROM analytics GROUP BY category HAVING COUNT(*) > 300;

-- 15. Find the app that has the highest proportion of min_installs to reviews, among apps that have been installed at least 100,000 times. Display the name of the app along with the number of reviews, the min_installs, and the proportion:
SELECT app_name, reviews, min_installs, min_installs/reviews AS proportion FROM analytics WHERE min_installs > 100000;