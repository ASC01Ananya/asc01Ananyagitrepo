-- Active: 1731311240422@@127.0.0.1@3306@sakila
USE sakila;
SELECT * FROM ACTOR;
CREATE DATABASE ATS;
use Ats;
show DATABASE Ats;
use sakila;
select 100+200 as day;
select 'thursday' as 'day';
SELECT PI();
select MOD(2,3);
SELECT sqrt(49);
select * from actor ORDER BY first_name ;
select * from actor ORDER BY first_name desc;
SELECT * from actor ORDER BY 4;
SELECT * from actor ORDER BY 3 desc;

select * from actor where actor_id<6;
select FLOOR(2.4);




-- String Operationss
select 1+1 as res;
select '1'+'1' as res;
select '12A'+'1' as AD;

select concat('anu',' raj') as myname;
-- select CONCAT(upper(left(first_name,1)),LOWER(left(first_name,-1),'.',UPPER(left(last_name,1))) as name from actor;
SELECT CONCAT(UPPER(LEFT(first_name, 1)), LOWER(SUBSTRING(first_name, 2)), '.', UPPER(LEFT(last_name, 1))) AS name
FROM actor;

-- LAB !
-- 1. Display all the records from the ACTOR table.
select * from actor;

-- 2. Display the first name and last name of all actors.
select first_name,last_name from actor;

-- 3. Display the total number of actors in the ACTOR table.
select COUNT(first_name) from actor;

-- 4. Display the first name of actors whose last name is 'GUINESS'.
select first_name from actor where last_name="GUINESS"

-- 5. Display the first name and last name of actors, sorted by first name in ascending order.
SELECT first_name,last_name from actor ORDER BY(first_name);


-- 6. Display the first name and last name of actors, sorted by last name in descending order.
SELECT first_name,last_name from actor ORDER BY(last_name) desc;


-- 7. Display the first name and last name of actors whose first name starts with 'A'.
SELECT first_name,last_name from actor where first_name like "%A";


-- SELECT first_name,last_name from actor where first_name <= "%h";

-- 8. Display the first name and last name of actors whose first name is 4 characters long.
select first_name,last_name from actor where LENGTH(first_name)=4;

-- 9. Display the first name and last name of actors whose last name ends with 'y' and is 5 characters long.
select first_name,last_name from actor where RIGHT(last_name,1)='y' and length(last_name)=5;
select first_name,last_name from actor where last_name like '____Y';
-- 10. Display the first name and last name of actors whose first name is 'KENNETH' and actor_id is less than 100.
SELECT first_name,last_name from actor where first_name='KENNETH' and actor_id<100;


-- 11. Display the first name and last name of actors whose last name is the same as the first name of actor 'CUBA'.
select first_name,last_name from actor where last_name IN (select last_name from actor where first_name='CUBA');

-- 12. Display the first name and last name of actors whose actor_id is in the set (5, 15, 23, 32, 45).
SELECT first_name,last_name from actor WHERE actor_id in (5,15,23,32,45);


-- 13. Display the first name and last name of actors whose actor_id is not in the set (1, 3, 7, 4).
select first_name,last_name from actor where actor_id not in (1,3,7,4);

-- 14. Display the first name and last name of actors whose last name is 'OLIVIER', 'ALLEN', or 'BIRCH', sorted by actor_id in ascending order.
select first_name,last_name from actor WHERE last_name in('OLIVIER','ALLEN','BIRCH') GROUP BY actor_id ;


-- 15. Display the first name and last name of actors whose first name is 'KENNETH' and actor_id is less than 100 and last name ends with 'I' or 'W'.
select first_name , last_name from actor where first_name='KENNETH' and actor_id<100 and RIGHT(last_name,1) like'I' or'W';


-- 16. Display the total number of distinct first names in the ACTOR table.
SELECT DISTINCT(first_name) from actor;


-- 17. Display the total number of actors whose first name is 'NICK'.
select count(actor_id) from actor where first_name='NICK';

-- 18. Display the total number of actors whose actor_id is between 1 and 5.

select count(actor_id) from actor where actor_id BETWEEN 1 and 5;


-- 19. Display the total number of actors whose actor_id is not between 1 and 5.
select count(actor_id) from actor where actor_id not BETWEEN 1 and 5;

--  20. Display the total number of actors whose first name starts with 'A'.
SELECT count(actor_id) from actor where first_name like 'A%';


 21. Display the first name and last name of actors, with the first name in uppercase.

SELECT UPPER(first_name) , last_name from actor ;

-- 22. Display the first name and last name of actors, with the last name in lowercase.

SELECT first_name , lower(last_name) from actor ;

-- 23. Display the first name and last name of actors, with the first two characters of the first name.
select LEFt(first_name,2) , last_name from actor;

-- 24. Display the first name and last name of actors, with the first name reversed.
select REVERSE(first_name),last_name from actor;

-- 25. Display the first name and last name of actors, with the full name in the format 'LAST_NAME, FIRST_NAME'.
SELECT CONCAT(last_name,',',first_name) from actor;
-- ============================================================================
-- DATE AND TIME 
-- =============
select last_update,DATE_FORMAT(last_update,'%M/%D/%Y') from actor;
select last_update,DATE_FORMAT(last_update,'%m/%d/%y') from actor;
select last_update,DATE_FORMAT(last_update,'%m/%a/%Y') from actor;
-- display currrent date
SELECT last_update ,DATE_FORMAT(last_update,'Today is the %D of %M %Y') from actor;

select CURDATE();
-- to select the current date !!!!!!!!!


























-- ============================================================================
-- 1. Which last names are not repeated?
SELECT last_name 
FROM actor 
GROUP BY last_name 
HAVING COUNT(last_name) = 1;

-- 2. Which last names appear more than once?
SELECT last_name 
FROM actor 
GROUP BY last_name 
HAVING COUNT(last_name) > 1;

-- 3. Which actor has appeared in the most films?
SELECT actor.actor_id, actor.first_name, actor.last_name, COUNT(film_actor.film_id) AS film_count
FROM actor
JOIN film_actor ON actor.actor_id = film_actor.actor_id
GROUP BY actor.actor_id
ORDER BY film_count DESC
LIMIT 1;

-- 4. Is 'Academy Dinosaur' available for rent from Store 1?
SELECT inventory.inventory_id 
FROM inventory
JOIN film ON inventory.film_id = film.film_id
LEFT JOIN rental ON inventory.inventory_id = rental.inventory_id AND rental.return_date IS NULL
WHERE film.title = 'Academy Dinosaur' AND inventory.store_id = 1;

-- 5. Which copies of films are at Store 1?
SELECT film.title, inventory.inventory_id 
FROM inventory
JOIN film ON inventory.film_id = film.film_id
WHERE inventory.store_id = 1;

-- 6. Insert a record to represent Mary Smith renting 'Academy Dinosaur' from Mike Hillyer at Store 1 today.
INSERT INTO rental (rental_date, inventory_id, customer_id, staff_id)
VALUES (CURRENT_TIMESTAMP, 
        (SELECT inventory_id FROM inventory 
         JOIN film ON inventory.film_id = film.film_id 
         WHERE film.title = 'Academy Dinosaur' AND inventory.store_id = 1 LIMIT 1), 
        (SELECT customer_id FROM customer 
         WHERE first_name = 'Mary' AND last_name = 'Smith'), 
        (SELECT staff_id FROM staff 
         WHERE first_name = 'Mike' AND last_name = 'Hillyer'));

-- 7. Find the last or most recent rental.
SELECT * 
FROM rental 
ORDER BY rental_date DESC 
LIMIT 1;

-- 8. What is the average length of all the films in the Sakila DB?
SELECT AVG(length) AS average_length 
FROM film;

-- 9. What is the average length of films by category?
SELECT category.name AS category, AVG(film.length) AS average_length
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
GROUP BY category.name;

-- 10. Which film categories are longer than the average length of all the films?
WITH overall_avg AS (
    SELECT AVG(length) AS avg_length 
    FROM film
)
SELECT category.name AS category, AVG(film.length) AS average_length
FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
GROUP BY category.name
HAVING AVG(film.length) > (SELECT avg_length FROM overall_avg);

-- 11. Display the movie title, language, and category.
SELECT film.title AS Movie_Title, 
       language.name AS Language, 
       category.name AS Category
FROM film
JOIN language ON film.language_id = language.language_id
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id;
