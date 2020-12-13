#include<iostream>
using namespace std;

class complex{
    int a,b;

    public:
        void init(){
            a = 0;
            b = 0;
        }
        void setData(int a1,int b1){
            a = a1;
            b = b1;
        }
        void setDataBySum(complex o1,complex o2){
            a = o1.a + o2.a;
            b = o1.b + o2.b;
        }
        void getData(){
            cout<<a<<" + i"<<b<<endl;
        }
};

int main(){

    complex c1,c2,c3;

    c1.setData(1,4);
    c1.getData();
    
    c2.setData(2,4);
    c2.getData();
    
    c3.init();
    c3.setDataBySum(c1,c2);
    c3.getData();

    return 0;
}