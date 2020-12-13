#include<iostream>
using namespace std;

// Function prototype

//int sun(int a,int b); // acceptable
int sum(int,int);

int main(){
    int num1,num2;
    
    cout<<"Enter number =";
    cin>>num1;
    
    cout<<"\nEnter number ="; 
    cin>>num2;
    // num1 and num2 are the actual parameters
    cout<<"the sum is "<<sum(num1,num2);

    return 0;
}

int sum(int a, int b){
    // a and b are formal parameters
    return a+b;
}
