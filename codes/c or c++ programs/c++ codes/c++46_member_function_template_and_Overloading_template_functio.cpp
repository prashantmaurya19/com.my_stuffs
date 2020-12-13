#include<iostream>
using namespace std;

void display(int a){
    cout<<"this is exact display() "<<a<<endl;
}

template<class T>
void display(T a){
    cout<<"this is exact display() "<<a<<endl;
}



int main(){

    display(5); //exact match has higher priority then template function
    display("prashant ");
    return 0;
}