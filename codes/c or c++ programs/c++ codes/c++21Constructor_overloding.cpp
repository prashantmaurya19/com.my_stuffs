#include<iostream>
using namespace std;

class complex{
    int a,b,c;

    public:
        void init(){
            a = 0;
            b = 0;
        }
        void setData(int a1,int b1){
            a = a1;
            b = b1;
        }

        // creating a constructor
        complex(void){
            a = 0;
            b = 0;
        }
        // this and above method is construstor overloading
        complex(int a1,int b1){
            a = a1;
            b = b1;
        }
        // constructor with default value
        complex(int a1,int b1 = 0,int c = 0){
            a = a1;
            b = b1;
        }
        void getData(){
            cout<<a<<" + i"<<b<<endl;
        }
};

int main(){

    

    return 0;
}