#include<iostream>
#include<fstream>
#include<string>
using namespace std;

int main(){

     ofstream out;
     out.open("simple.txt"); //this function open the file
    out<<"this is me what about you\nthis is next if want to read it\nthis is thried.";
    out.close();
    
    ifstream in;
    in.open("simple.txt"); //this function work same as above
    string content;
    while(in.eof() == 0)
    {
        getline(in,content);
        cout<<content<<endl;
    }
    in.close();

 
    return 0;
}