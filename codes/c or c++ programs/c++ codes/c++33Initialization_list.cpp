#include<iostream>
using namespace std;
/*
syntax for initialization list in constructor:
constructor (argument-list): initialization-section{
    assigment + other code;
}

class test{
    int a,b;
    public:
       important ---->  whichever you variable declare first that initializtion first in 
        this case first a initializ the b 
        test(int i,int j): a(i),b(j) {


        }

}
*/

class test{
    int a,b;
    public:
        test(int i,int j): a(i),b(a + j) {
            cout<<"constructor executed"<<endl;
            cout<<"value of a = "<<a<<endl;
            cout<<"value of b = "<<b<<endl;
        }
};
int main(){

    test prashant(2,3);

    return 0;
}