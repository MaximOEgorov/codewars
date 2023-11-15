/*
In this kata you should simply determine, whether a given year is a leap year or not.
In case you don't know the rules, here they are:
Years divisible by 4 are leap years,
    but years divisible by 100 are not leap years,
    but years divisible by 400 are leap years.
    Tested years are in range 1600 ≤ year ≤ 4000.
 */

function isLeapYear(year) {
  if (year%400==0) {
      return true}
  else if (year%100==0) {
      return false}
  else if (year % 4 == 0) {
      return true}
  else {
      return false;}
}


console.log(isLeapYear(2100))