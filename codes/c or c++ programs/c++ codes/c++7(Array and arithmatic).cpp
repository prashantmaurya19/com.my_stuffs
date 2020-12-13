#include<iostream>
#include<iomanip>
using namespace std;

int main()
{
    int marks[4] = {12,13,14,90};
    
    // pointer and array
    int *p = marks;
    for(int i = 0;i<4;i++){
        cout<<*p<<endl;
        p++;
    }
    return 0;
}
