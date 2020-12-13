#include<iostream>
#include<iomanip>
using namespace std;

int main()
{
    // pointer is an type of data type which holds the address of variables

    // & ----> Address of operator

    // * ----> Dereference operator
    
    int a = 89;

    int * p = &a;

    cout<<*p;
    
    // pointer to pointer 

    int ** c = &p;

    

    return 0;
}
