#include<iostream>
using namespace std;

// polymorphism in c++
// --> one and many forms

// types of polymorphism
// 1. run time polymorphism
//      1.1 - virtual function
// 2. compile time polymorphism
//      2.1 - operator overloading
//      2.2 - Function overloading


class Base{
    int data; //this member is not inheritable

    public:
    int data2;
    void setData(int a,int b){
        data = a;
        data2 = b;
    }
    int  getData(){
        return data;
    }
    int getData2(){
        return data2;
    }
    void display(){
        cout<<"value data 1 = "<<data<<endl;
        cout<<"value data 2 = "<<data2<<endl;
            
        }
};

class Derived : public Base{
    int data3;
    public:
        void process(){
            data3 = data2 * getData();
        }
        void display(){
            cout<<"value data 1 = "<<getData()<<endl;
            cout<<"value data 2 = "<<data2<<endl;
            cout<<"value data 3 = "<<data3<<endl;
            
        }
};

int main(){

     Base *obj;
     Derived obj1;

     obj = &obj1;
     obj->setData(12,12);
     obj->data2 = 734;
     obj->display();


 
    return 0;
}