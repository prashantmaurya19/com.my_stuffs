#include<iostream>
using namespace std;

class simple_calci{
    int result ,a,b;

    public:
        simple_calci(){
            string s;
            cout<<"Enter num1 = ";
            cin>>a;
            cout<<"\nEnter num2 = ";
            cin>>b;
            cout<<"\n which operation you want to perform = ";
            cin>>s;
            if(s=="+"){
                add();
            }else if(s=="-"){
                sub();
            }else if(s=="*"){
                mul();
            }else
            {
                div();
            }
            cout<<"your result = "<<result<<endl;
        }
        void add(){
            result = a + b;
        }
        void sub(){
            result = a - b;
        }
        void mul(){
            result = a * b;
        }
        void div(){
            result = a / b;
        }
};



int main(){

    simple_calci prashant;

    return 0;
}