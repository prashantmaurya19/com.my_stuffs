#include<iostream>
using namespace std;

//In c %.3f means return only 3 decimal value like value 
//is 3.9999999 your want only 3 decimal values then you can 
//take it as %.3f then convert into 3.999  3.9999999 -> 3.999


//function template

template<class T>
string addValue(T a,T b){
    return a + b;
}

template<class T>
void swapp(T &a,T &b){
    T temp = a;
    a = b;
    b = temp;
}

int main(){

    // string str = addValue<string>("prashant ","maurya");
    // cout<<"we adding two strings result = "<<str<<endl;
    
    int a= 4,b = 6;
    printf("before swapping a = %d  b = %d\n",a,b);
    swapp<int>(a,b);
    printf("after swapping a = %d  b = %d",a,b);
    

    return 0;
}