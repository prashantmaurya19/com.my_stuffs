#include<iostream>
using namespace std;

class complex{
    int real,imaginary;

    public:
        void init(){
            real = 0;
            imaginary = 0;
        }
        void setData(int a1,int b1){
            real = a1;
            imaginary = b1;
        }

        void getData(){
            cout<<real<<" + i"<<imaginary<<endl;
        }
};

int main(){
    // complex c1;
    // complex *ptr = &c1;
    complex *ptr = new complex;
    // (*ptr).setData(12,43);
    ptr->setData(12,43); //this is arrow operator
    (*ptr).getData();

    complex *ptr1 = new complex[2];
    // (*ptr).setData(12,43);
    ptr1->setData(12,23); //this is arrow operator
    (*ptr1).getData();

    
    return 0;
}