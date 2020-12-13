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

        // creating a constructor
        complex(void){
            a = 0;
            b = 0;
        }
        
        complex(int a1,int b1){
            a = a1;
            b = b1;
        }
        void getData(){
            cout<<a<<" + i"<<b<<endl;
        }
};

int main(){
    // implicit call
    complex a(7,3);

    // explicit call
    complex b = complex(6,9);
    a.getData();
    b.getData();

    return 0;
}