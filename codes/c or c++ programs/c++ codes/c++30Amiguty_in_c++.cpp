#include<iostream>
using namespace std;

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
        void greet(){
            cout<<"hellow sir"<<endl;
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
        void greet(){
            cout<<"Good Mornig sir"<<endl;
        }
};

class Derived : public Base1,public Base2{

    int a;

    public:
    // solving in abiguty
        void greet(){
            Base2::greet();
            cout<<"this is also execut";
        }

};

int main(){

    Derived prashant;
    prashant.greet();

    return 0;
}