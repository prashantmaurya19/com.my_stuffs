#include<iostream>
#include<fstream>
using namespace std;

/*
header file fsteam it use for file io
if has some useful classes 
1. fstreambase 
2. ifstream ---> derived from (1)
3. ofstream ---> derived from (1)
*/

/*
    for doing read operation---(ifstream is used to extract data from the file)
    
    ifstream object_name(file_name); <------ initializing ifstream object
    string st;
    in>>st;

    for doing write operation----(ofstream is used to inject or write the data in file)
    same as above--- initializing ofstream object
    
    ofstream object_name(file_name);
    string st = "prashant"; for sack of example
    object_name<<st;
*/
int main(){
    ofstream out("simple.txt");
    cout<<"enter whatever you want = ";
    string content;
    getline(cin,content);
    out<<content;

    out.close();  //closing the conenction from file

    ifstream in("simple.txt");
    getline(in,content);
    cout<<content;

    in.close();
    return 0;
}