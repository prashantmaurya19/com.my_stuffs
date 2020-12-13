#include<iostream>
using namespace std;

void printvariable(){
    int i = 90;
    bool boolean = true;
    float decimal = 890.90;
    double Ddecimal = 98898.009;
    char name[10] = "prashant";
    cout<<"the values of my variables is \n i = "<<i<<"\n boolean = "<<boolean
    <<"\n decimal = "<<decimal<<"\n Ddecimal = "<<Ddecimal
    <<"\nname = "<<name;
}

int main(){
    printvariable();
    return 0;
}