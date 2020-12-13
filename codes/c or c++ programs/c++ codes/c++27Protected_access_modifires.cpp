#include<iostream>
using namespace std;

class Base{
    int data,b; //this member is not inheritable
    
    protected:
        int a;
    
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

/*
For a protected member:{     Drivation      }
                           public           private          protected
1. private members      not Inheritable     not Inheritable  not Inheritable
2. protected members    Protected           private          protected
3. public members       public              private          protected
*/

class Derived : protected Base{

    public:
        int getData(){
            return a;
        }
};

int main(){

    Base b;
    Derived a;
    cout<<b.getData();

    return 0;
}