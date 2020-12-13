#include<iostream>
using namespace std;

class employee{

    private:
        int a,b;
    public:
        int s,e;
        void setData(int a1,int b1);
        void setData(int a1,int b1,int s1,int e1);
        // getdata implement inside the class
        void getdata(){
            cout<<"data is a = "<<a<<" b = "<<b<<" s = "<<s<<" e = "<<e<<endl;
        };

};

// setdata implement inside the class

void employee :: setData(int a1,int b1){
    a = a1;
    b = b1;
}

void employee :: setData(int a1,int b1,int s1,int e1){
    a = a1;
    b = b1;
    s = s1;
    e = e1;
}

int main(){

    employee prashant;

    prashant.setData(4,2,2,5);
    prashant.getdata();

    return 0;
}