#include<iostream>
using namespace std;

/*

    if we inheriting c from b and b from a :{a-->b-->c}
    1. a is the base class for b and b is the base class for c
    2.a-->b-->c is called inheritance path

*/
// syntax for inheritance in multiple inheritance
// class Detived : visibility-mode base1, visibility-mode base2{

// };

class Base1{
    protected:
        int baseint;
    public:
        void setBaseint(int a){
            baseint = a;
        }
        void getBaseint(){
            cout<<"value in baseint = "<<baseint<<endl;
        }
};
class Base2{
    protected:
        int baseint2;
    public:
        void setBaseint2(int a){
            baseint2 = a;
        }
        void getBaseint(){
            cout<<"value in baseint = "<<baseint2<<endl;
        }
};

class Derived : public Base1 , public Base2{
   
    public:
        void show(){
            cout<<"the value of base = "<<baseint<<endl;
            cout<<"the value of base2 = "<<baseint2<<endl;
            cout<<"the sum of base and base2 = "<<baseint+baseint2<<endl;

        }
};

int main(){

    Derived prashant;
    prashant.setBaseint(1234);
    prashant.setBaseint2(9999);
    prashant.show();
    

    return 0;
}