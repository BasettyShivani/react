create database day2;
use day2;
CREATE TABLE employee (
    eid INT,
    fname VARCHAR(50),
    lname VARCHAR(50),
    age INT,
    salary INT NULL,
    dept VARCHAR(20),
    doj DATE
);

INSERT INTO employee (eid, fname, lname, age, salary, dept, doj)
VALUES
(1, 'rajeev', 'sukla', 23, 12000, '.net', '2011-10-23'),
(2, 'sowmya', 'kumari', 23, 19000, 'db', '2010-11-13'),
(3, 'kishore', 'kumar', 27, 36000, 'android', '2011-10-16'),
(4, 'abimanyu', 'biswal', 22, NULL, 'android', '2010-02-20'),
(5, 'soni', 'kumar', 24, 21800, '.net', '2009-06-21'),
(6, 'anu', '_singh', 22, 12000, 'db', '2010-10-23'),
(7, '_dinesh', 'moh%anty', 23, 15000, '.net', '2009-08-26'),
(8, 'nishala', '_kumari', 22, 18000, 'db', '2008-07-19');
SELECT * FROM employee;


CREATE TABLE patient (
    pid INT,
    fname VARCHAR(50),
    lname VARCHAR(50),
    age INT,
    bg VARCHAR(10)
);
INSERT INTO patient(pid, fname, lname, age, bg) VALUES
(1, 'madhava', 'reddy', 45, 'o+ve'),
(2, 'abhinav', 'bandra', 45, 'o-ve'),
(4, 'hari', 'kiran', 60, 'b-ve'),
(3, 'madhava', 'kiran', 52, 'o+ve'),
(5, 'veena', 'kumari', 42, NULL),
(6, 'k_iran', 'kumar', 39, 'b-ve'),
(2, 'abhinav', 'bandra', 45, 'o-ve'),
(7, 'mahes%h', 'nambootri', 36, 'b+ve'),
(8, 'rahul', 'kumar', 46, 'b-ve'),
(9, 'bharat', 'kumar', 56, 'b-ve');
SELECT * FROM patient;
select * from employee order by fname;
select * from employee order by lname,fname desc;
select * from employee order by salary asc limit 3;
select * from employee order by salary asc limit 4,6;
select distinct fname,age from employee order by age desc limit 6;
select concat(fname,lname) as ‘Fullname’,age from employee;
select * from employee where salary>20000;
select * from employee where salary between 15000 and 21000;
 select * from employee where salary in(15000,21800,36000);
select * from employee where salary is null;
select * from employee where salary is not null;

select bg from patient group by bg;
select bg from patient group by bg having avg(age)>45;
select bg, count(*) as ‘count’ from patient group by bg;
select count(*) as result from employee;
select dept from employee group by dept;
select max(age) as 'max age',bg from patient group by bg;
select lname,min(age) from patient group by bg,lname;
select bg,max(age) as'max age' from patient group by bg having max(age)>40;
select p1.* from patient p1 where 3=( select count(distinct(p2.pid)) from patient p2 where p2.age>p1.age);
select fname+lname as ‘fullname’ from employee where salary > ( select salary from employee where eid=4);
select e1.salary from employee e1 where 1= (select count(*) from employee e2 where e2.salary>e1.salary);
select p1.* from patient p1 where 3=( select count(distinct(p2.pid)) from patient p2 where p2.age>p1.age);
