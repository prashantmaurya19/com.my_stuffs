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
        
        // declaring the friend function 
        friend complex sumComplex(complex o1,complex o2);
        
        void getData(){
            cout<<a<<" + i"<<b<<endl;
        }
};

complex sumComplex(complex o1,complex o2){
    complex o3;
    o3.setData((o1.a + o2.a),(o1.b + o2.b));
    return o3;
}

class Y;

class X{

    int data;
    public:
        void setData(int value){
            data = value;
        }
        friend void add(X ,Y );
        int getData(){
            return data;
        }
};
class Y{

    int data;
    public:
        void setData(int value){
            data = value;
        }
        friend void add(X o1,Y o2);
        int getData(){
            return data;
        }
};

void add(X o1,Y o2){
    cout<<"added the value = "<<(o1.data+o2.data);
}

int main(){

    // complex c1,c2,c3;

    // c1.setData(1,4);
    // c1.getData();
    
    // c2.setData(2,4);
    // c2.getData();
    
    // c3 = sumComplex(c1,c2);
    // c3.getData();

    X a;
    Y b;

    a.setData(2);
    b.setData(3);

    add(a,b);

    return 0;
}

/*
properties of friend function

1. usally it take object in argument
2. not in the scope of class
3. can be invoked without the help of any object
4. can declared with any public or private specifiers
*/
