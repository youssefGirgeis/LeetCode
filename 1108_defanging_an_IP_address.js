/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".

Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
*/

// one liner solution
const defangIPaddr = function (address) {
  return address.replaceAll(".", "[.]");
};

//Second solution - O(n) runtime
const defangIPaddr = function (address) {
  defangedAddress = "";
  for (char of address) {
    if (char === ".") defangedAddress += "[.]";
    else defangedAddress += char;
  }
  return defangedAddress;
};
