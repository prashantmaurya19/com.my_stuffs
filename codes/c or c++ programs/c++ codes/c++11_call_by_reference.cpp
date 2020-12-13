#include<iostream>
using namespace std;

int & swapPoninter(int *a, int *b);

int main(){

    int a =2,b = 6;
    
    cout<<"befor swap a = "<<a<<" b = "<<b<<endl;
    
    swapPoninter(&a,&b) = 89;
    
    cout<<"after swap a = "<<a<<" b = "<<b<<endl;

    return 0;
}
// call by reference variable
int & swapPoninter(int *a, int *b){
    int temp = *a;
    *a = *b;
    *b = temp;

    return *a;
}

// this method using call by reference by pointer
// void swapPoninter(int *a, int *b){
//     int temp = *a;
//     *a = *b;
//     *b = temp;
// }