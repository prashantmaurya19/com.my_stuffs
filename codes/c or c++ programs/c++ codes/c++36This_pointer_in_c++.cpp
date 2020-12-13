#include<iostream>
using namespace std;

class simple{
    int a;
    public:
    void setdata(int a){
        this->a = a;
    }
    simple & getobj(){
        return *this;
    }
    void getdata(){
        cout<<"your data = "<<a<<endl;
    }
};

int main(){
    //this keyword point to that object
    simple b;
    b.setdata(32);
    simple a = b.getobj();

    a.getdata();


    return 0;
}