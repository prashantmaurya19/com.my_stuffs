#include<iostream>
using namespace std;

class employee{
    int Id;
    static int count; //<-- this is a static data member this class


    public:

        void setData(){
            cout<<"\nEnter employe Id = ";
            cin>>Id;
            count++;
        }
        void getData(){
            cout<<"Employe = "<<Id<<" Employe no. = "<<count;
        }
        static void getCount(){
            cout<<"\ncount is "<<count<<endl;
        }
};

// declartion of static variable in c++
// static is not object specific it related to class 
int employee :: count = 8293;

int main(){

    employee prashant;

    for (int i = 0; i < 3; i++)
    {
        prashant.setData();
        prashant.getData();
        employee :: getCount();
    }
    
    return 0;
}