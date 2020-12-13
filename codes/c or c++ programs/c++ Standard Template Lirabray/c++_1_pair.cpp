#include<iostream>
using namespace std;

//pairs
/*
>>it is work as maps but it contain only one pair
	pair<int ,int > p = {1,3};

>> Methods
	p.first() // returns the first value in the pairs
	p.second() // return the second value in the pair
>>for printing the pairs
	cout<< p.first() << p.second()<<endl;

*/


int main(){
	pair<int ,string> p = {1,"prashant"};
	cout<< p.first() << " " << p.second()<<endl;
 	return 0;
 }
