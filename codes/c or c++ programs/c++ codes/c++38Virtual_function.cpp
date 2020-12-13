#include<iostream>
using namespace std;


class Base{
    int data = 89; //this member is not inheritable

    public:
    int data2 = 78;
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
    virtual void display(){
        cout<<"value data 1 = "<<data<<endl;
        cout<<"value data 2 = "<<data2<<endl;
            
    }
};

class Derived : public Base{
    int data3 = 888;
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

  Base * ptr;
  Derived obj;
  ptr = &obj;
  ptr->display(); //this function call virtualy

 
    return 0;
}