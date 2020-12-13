#include<iostream>
#include<fstream>
#include<string>
using namespace std;

// useful classes for file io
/*
    1. fstreambase
    2. ifstream ---> derived from fstreambase
    3. ofstream ---> derived from fstreambase

    In order work with files in c++ , you will have to open it
    1. using the constructor
    2. using the member function open() of the class
*/

int main(){
    string mes= "f!";
    // opening files useing constructor
    // ofstream out("simple.txt"); //write operator
    // out<<mes;
    ifstream in("simple.txt");
    // in>>mes;
    getline(in,mes);
    getline(in,mes);
    cout<<mes;

     
 
    return 0;
}