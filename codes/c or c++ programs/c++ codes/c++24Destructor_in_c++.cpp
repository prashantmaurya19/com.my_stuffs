#include<iostream>
using namespace std;

// Destructor never takes any argument nor return any value


class num{
    static int count;
    
    public:
    num(){
        count++;
        cout<<"no. of object = "<<count<<endl;
    }
    ~num(){
        cout<<"destructor is called here no. of object = "<<count<<endl;
        count--;
    }
};

int num :: count = 0;



int main(){ 

    cout<<"In main"<<endl<<"creating first object"<<endl;
    num a1;
    {
        cout<<"Enter this block"<<endl<<"creating two object "<<endl;
        num n2,n3;
        cout<<"Exiting this block"<<endl;
    }
    cout<<"back to main"<<endl;

    return 0;
}