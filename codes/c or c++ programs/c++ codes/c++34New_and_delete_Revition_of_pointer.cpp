#include<iostream>
using namespace std;

class example{
    int a,b;
    public:
        example(int i,int j): a(i),b(a + j) {
            cout<<"constructor executed"<<endl;
            cout<<"value of a = "<<a<<endl;
            cout<<"value of b = "<<b<<endl;
        }
};

int main(){
    // basic example
    int a = 3;
    int* ptr = &a; //here we creating a pointer
    *ptr = 787;
    // delete[] ptr;
    cout<<*ptr<<endl;

    // new keyword
    int *p = new int(40);
    
    example b(1,2);
    example *n = new example(b);

    int *arr = new int[2];
    arr[0] = 23;
    arr[1] = 45;

    delete[] arr;
    
    cout<<"value of arr[0] = "<<arr[0]<<endl;
    cout<<"value of arr[1] = "<<arr[1]<<endl;

    // delete operator

    return 0;
}

// if we write *pointer_name then
// *(start) represent the value at that address which is stored in
// that pointer 
