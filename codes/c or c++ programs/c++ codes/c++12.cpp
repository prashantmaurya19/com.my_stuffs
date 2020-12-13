#include<iostream>
using namespace std;

// inline is a request to compliler to make inline the method
inline int sum(int a, int b){
    static int c = 0;
    return (a+b)*c++;
}

// static keyword use when we want to initialise a vaiable only one time

// const keyword used to make the constant the value

// default argument

int main(){

    int a,b;

    cout<<"Enter the numbers "<<endl;
    cin>>a>>b;

    for(int i = 0;i<10;i++){
        cout<<"sum = "<<sum(a,b)<<endl;
    }

    return 0;
}