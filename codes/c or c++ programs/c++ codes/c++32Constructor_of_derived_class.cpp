#include<iostream>
using namespace std;

/*
case 1:
class B : public A{
    //order od execution of constructor --> first A() then B()
}
case 2:
class A : public B , public C{
     //order od execution of constructor --> first B() then c() then A()
}

case 3:
class A : public B, virtual public c{
    //order od execution of constructor --> first c() then B() then A()
}

*/

class Base{
    int data;
    public:
        Base(int i){
            data = i;
            cout<<"base1 class constructor called"<<endl;
        }
        void getdata(){
            cout<<"value of data = "<<data<<endl;
        }
};
class Base2{
    int data2;
    public:
        Base2(int i){
            data2 = i;
            cout<<"base2 class constructor called"<<endl;
        }
        void getdata2(){
            cout<<"value of data2 = "<<data2<<endl;
        }
};

class Drived : public Base, public Base2{
    int derived,derived1;
    public:
        Drived(int a,int b,int c,int d) : Base2(a) , Base(b){
            derived = c;
            derived1 = d;

            cout<<"Derived class constructor called"<<endl;
        }
        void printData(){
            cout<<"derived value = "<<derived<<
            "\tderived1 value = "<<derived1<<endl;
        }
} ;

int main(){

    Drived prashant(2,3,6,8);
    prashant.getdata();
    prashant.getdata2();
    prashant.printData();


    return 0;
}