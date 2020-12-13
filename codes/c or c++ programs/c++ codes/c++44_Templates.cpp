#include<iostream>
using namespace std;

//objects made by classes and classes made by template
//template also call as paremeterized classes
//why use template?
//>>Do not Repeat Yourself
//>>generic progamming
//STL --> Standard Template Liabray


//Passing Default parameters in template
//template<class T1 = int,class T2 = double>




template<class T,class X>
class calci{
    T* result;
    public:
        calci(T a,T b){
            cout<<a + b<<endl;
        }
};

int main(){

        calci<int,char> cal(2,8);
        calci<string,char> c1("prashant ","maurya");
        calci<float,bool> c2(4.8,9.8);
 
    return 0;
}