#include<iostream>
using namespace std;


class number{
    int a;
    public:
        number(){};
        number(int n){
            a = n;
        }
        // compiler provide a defaule copy constructor ,but we can also overwrites it
        number(number &obj){
            a = obj.getNumber();
        }
        int getNumber(){
            return a;
        }
};

int main(){
    number x(12),
    y(x),y1;
    cout<<"Value in x = "<<x.getNumber()<<" value in y = "<<y.getNumber()<<endl;
    y = y1; //copy constructor not called here
    number y1 = y; //copy constructor called here
    
    return 0;
}