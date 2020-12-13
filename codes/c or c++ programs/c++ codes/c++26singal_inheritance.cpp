#include<iostream>
using namespace std;

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

    Derived d1;
    d1.setData(12,13);
    d1.process();
    d1.display();

    return 0;
}